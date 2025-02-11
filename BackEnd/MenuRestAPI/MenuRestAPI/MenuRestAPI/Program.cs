
using System.Text.Json.Serialization;
using MenuRestAPI.Models;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.Extensions.Options;
using Steeltoe.Discovery.Client;

namespace MenuRestAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Add Steeltoe Discovery Client
            builder.Services.AddDiscoveryClient(builder.Configuration);
            // Use Steeltoe Discovery Client
            //app.UseDiscoveryClient();

            //Comment following code
            //app.UseHttpsRedirection();


            builder.Services.AddDbContext<p07_tablebookingsystemContext>();
            builder.Services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                options.JsonSerializerOptions.WriteIndented = true;

            });

            builder.Services.AddCors(policybuilder => policybuilder.AddDefaultPolicy(policy =>
            policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader()));

            //Required to remove cyclic dependancy error
            builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
            

               var app = builder.Build();
               app.UseCors();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            //Cors
            app.UseCors(policy => policy.AllowAnyHeader()
                            .AllowAnyMethod()
                            .SetIsOriginAllowed(origin => true)
                            .AllowCredentials());

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
