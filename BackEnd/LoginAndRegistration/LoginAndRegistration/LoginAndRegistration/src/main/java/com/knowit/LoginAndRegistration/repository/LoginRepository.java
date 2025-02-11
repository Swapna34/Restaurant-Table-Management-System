//package com.knowit.LoginAndRegistration.repository;
//
//
//import java.util.Optional;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import com.knowit.LoginAndRegistration.entities.Login;
//
//@Repository
//public interface LoginRepository extends JpaRepository<Login, Integer> {
//
//	
//	@Query("select  l from Login l where email= :email and pwd= :pwd")
//	public Optional<Login> getLogin(String email ,String pwd);
//}
package com.knowit.LoginAndRegistration.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.knowit.LoginAndRegistration.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {

	
	@Query("select  l from Login l where email= :email and pwd= :pwd")
	public Optional<Login> getLogin(String email ,String pwd);
}
