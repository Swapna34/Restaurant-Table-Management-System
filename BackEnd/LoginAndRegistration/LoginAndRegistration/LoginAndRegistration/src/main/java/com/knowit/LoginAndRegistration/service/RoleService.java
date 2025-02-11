package com.knowit.LoginAndRegistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.LoginAndRegistration.entities.Role;
import com.knowit.LoginAndRegistration.repository.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	RoleRepository rolerepository;

	
	public Role getRole(int rid)
	{
		return rolerepository.findById(rid).get();
	}
}
