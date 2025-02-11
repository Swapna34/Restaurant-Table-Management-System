package com.knowit.LoginAndRegistration.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="roles")
public class Role {
	
	@Id
	@Column(name="r_id")
	private int rid;
	
	@Column(name="Type")
	private String type;

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int rid, String type) {
		super();
		this.rid = rid;
		this.type = type;
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	
}
/*
 * CREATE TABLE `roles` ( `r_id` int NOT NULL, `Type` varchar(45) NOT NULL,
 * PRIMARY KEY (`r_id`), UNIQUE KEY `Id_UNIQUE` (`r_id`), UNIQUE KEY
 * `Type_UNIQUE` (`Type`) )
 */