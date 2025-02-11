package com.example.demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;


@Configuration
public class MyBeans {
	
	@Bean
	CorsWebFilter corsWebFilter() {
	UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    
    config.setAllowCredentials(true);
    config.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Ensure it matches your frontend URL
    config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
    config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
    //config.setExposedHeaders(Arrays.asList("Authorization")); // Expose headers if needed
    
    source.registerCorsConfiguration("/**", config);

    return new CorsWebFilter(source);
}


@Bean
RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
	return builder.routes() 
			.route("LoginAndRegistration", r -> r.path("/auth/**")
	                .uri("http://localhost:8072"))  // Use direct URL for testing   
			.route("Table",r->r.path("/crud/**")
				 .uri("http://localhost:8073"))	
//			.route("MENURESTAPI",r->r.path("/transc/MenuCategory/**")
//				 //.uri("http://localhost:9074"))
//					.uri("lb://MENURESTAPI"))
//			.route("MENURESTAPI",r->r.path("/transc/MenuItem/**")
//					 //.uri("http://localhost:9074"))
//					.uri("lb://MENURESTAPI"))
//			.route("MENURESTAPI",r->r.path("/transc/Order/**")
//					 //.uri("http://localhost:9074"))
//					.uri("lb://MENURESTAPI"))
			.build();
}
		
//	@Bean
//	public RouteLocator customRouterLocator(RouteLocatorBuilder builder) {
//		return builder.routes() 
//				.route("service1",r->r.path("/auth/**")
//				.uri("http://localhost:8072"))
//                .build();		     
//
//					//.cors(c->c.configuration(corsConfig())))   
//					// .uri("lb://LoginAndRegistration"))
////				.route("service2",r->r.path("/api2/**")
////					 //.uri("http://localhost:8073"))
////					 .uri("lb://Table"))	
//////				.route("custadd",r->r.path("/api3/**")
//////						 //.uri("http://localhost:5046"))
//////						 .uri("lb://CustAdd"))
////				.route("menurestapi",r->r.path("/api3/**")
////						 //.uri("http://localhost:9074"))
////						 .uri("lb://MenuRestAPI"))
//				
//		
//		
//	}
//	
//	@Bean
//    public CorsWebFilter corsWebFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//        
//        config.setAllowCredentials(true);
//        config.setAllowedOrigins(Arrays.asList("http://localhost:3000")); // Frontend URL
//       config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
//        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
//        //config.setAllowedOrigins(List.of("http://localhost:3000")); // Allow frontend URL
//        //config.addAllowedMethod("*"); // Allow all HTTP methods
//        //config.addAllowedHeader("*"); // Allow all headers
//
//        source.registerCorsConfiguration("/**", config);
//        return new CorsWebFilter(source);
//    }
}

//private CorsConfiguration corsConfig() {
//CorsConfiguration config = new CorsConfiguration();
//List<String> origins = new ArrayList<String>();
//
//config.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
//config.setAllowedMethods(Arrays.asList(HttpMethod.GET,HttpMethod.POST));
//config.setAllowedHeaders(Arrays.asList("",""));
//config.setAllowCredentials(true);
//
//return config;
//	
//}	

/*.filters(f -> f.(cors -> cors
.setAllowCredentials(true)
.setAllowedOrigins(Arrays.asList("http://localhost:3000"))
.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"))
.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"))))*/
