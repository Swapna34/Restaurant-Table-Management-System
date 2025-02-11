package com.knowit.LoginAndRegistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.LoginAndRegistration.entities.Login;
import com.knowit.LoginAndRegistration.entities.Manager;
import com.knowit.LoginAndRegistration.repository.ManagerRepository;

@Service
public class ManagerService {
	
	@Autowired
	ManagerRepository managerRepository;

	
	public Manager getManager(Login l)
	{
		return managerRepository.getManager(l.getUid());
	}
	
	public Manager saveManager(Manager m)
	{
		return managerRepository.save(m);
	}
}
