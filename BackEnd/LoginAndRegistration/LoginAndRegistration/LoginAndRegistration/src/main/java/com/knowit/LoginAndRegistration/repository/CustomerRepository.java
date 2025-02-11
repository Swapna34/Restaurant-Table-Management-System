package com.knowit.LoginAndRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.knowit.LoginAndRegistration.entities.Customer;
import com.knowit.LoginAndRegistration.entities.Login;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	  @Query("select c from Customer c where c.u_id.uid= :uid") 
	  public Customer getCustomer(Integer uid);
	 
	  
}
