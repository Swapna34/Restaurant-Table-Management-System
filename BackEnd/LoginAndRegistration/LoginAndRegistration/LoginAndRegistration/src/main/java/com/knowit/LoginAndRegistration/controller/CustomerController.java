package com.knowit.LoginAndRegistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.knowit.LoginAndRegistration.entities.Customer;
import com.knowit.LoginAndRegistration.entities.CustomerReg;
import com.knowit.LoginAndRegistration.entities.Login;
import com.knowit.LoginAndRegistration.entities.Role;
import com.knowit.LoginAndRegistration.service.CustomerService;
import com.knowit.LoginAndRegistration.service.LogineService;
import com.knowit.LoginAndRegistration.service.RoleService;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class CustomerController {

	@Autowired
	CustomerService customerService;

	@Autowired
	LogineService logineService;

	@Autowired
	RoleService roleService;

	@GetMapping("/getCustomer")
	public Customer getCustomer(@RequestParam("u_id") int u_id) {
		Login l = logineService.getById(u_id);
		return customerService.getCustomer(l);
	}
	

	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg cr) {
		Role r = (Role) roleService.getRole(3);
		Login l = new Login(cr.getEmail(), cr.getPwd(), r);
		Login save = logineService.save(l);
		Customer c = new Customer(cr.getFname(), cr.getLname(), cr.getContact(), l);
		return customerService.saveCustomer(c);
	}
	


}
