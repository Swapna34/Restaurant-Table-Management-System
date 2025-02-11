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
import com.knowit.LoginAndRegistration.entities.Hotel;
import com.knowit.LoginAndRegistration.entities.Login;
import com.knowit.LoginAndRegistration.entities.Manager;
import com.knowit.LoginAndRegistration.entities.ManagerReg;
import com.knowit.LoginAndRegistration.entities.Role;
import com.knowit.LoginAndRegistration.service.HotelService;
import com.knowit.LoginAndRegistration.service.LogineService;
import com.knowit.LoginAndRegistration.service.ManagerService;
import com.knowit.LoginAndRegistration.service.RoleService;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class ManagerController {
	
	@Autowired
	ManagerService managerService;
	
	@Autowired
	LogineService logineService;
	
	@Autowired
	RoleService roleService;
	
	@Autowired
	HotelService hotelService;
	
	@GetMapping("/getManager")
	public Manager getManager(@RequestParam("m_id") int m_id)
	{
		Login l=logineService.getById(m_id);
		return managerService.getManager(l);	
	}
	
	
	  @PostMapping("/regManager") 
	  public Manager regManager(@RequestBody ManagerReg mr) 
	  { 
		  System.out.println(mr);
		  
		  Role r= (Role)roleService.getRole(2); 
		  Hotel h=(Hotel)hotelService.getHotel(1); 
		  Login l=new Login(mr.getEmail(),mr.getPwd(),r); 
		  Login save=logineService.save(l);
	  
		  Manager m=new Manager(mr.getFname(),mr.getLname(),mr.getContactNo(),true, save, h);
		  return managerService.saveManager(m); 
	  }
	  
//	  @PostMapping("/regCustomer")
//		public Customer regCustomer(@RequestBody CustomerReg cr) {
//			Role r = (Role) roleService.getRole(3);
//			Login l = new Login(cr.getEmail(), cr.getPwd(), r);
//			Login save = logineService.save(l);
//			Customer c = new Customer(cr.getFname(), cr.getLname(), cr.getContact(), l);
//			return customerService.saveCustomer(c);
//		}
	 
	
	
}
