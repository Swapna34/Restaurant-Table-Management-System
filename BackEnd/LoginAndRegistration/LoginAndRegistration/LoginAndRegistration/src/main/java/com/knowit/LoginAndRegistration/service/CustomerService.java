package com.knowit.LoginAndRegistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.LoginAndRegistration.entities.Customer;
import com.knowit.LoginAndRegistration.entities.Login;
import com.knowit.LoginAndRegistration.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository customerRepository;
	
	public Customer getCustomer(Login l)
	{
		return customerRepository.getCustomer(l.getUid());
	}
	
//	public Customer getCust(Login l)
//	{
//		return customerRepository.getCust(l.getUid());
//	}
	
	public Customer saveCustomer(Customer c)
	{
		return customerRepository.save(c);
	}

}
