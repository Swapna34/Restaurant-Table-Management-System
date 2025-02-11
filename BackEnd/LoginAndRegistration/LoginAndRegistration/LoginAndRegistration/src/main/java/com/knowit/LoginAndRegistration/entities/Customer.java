package com.knowit.LoginAndRegistration.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int c_id;
	
	private String fname;
	private String lname;
	@Column(name="contact")
	private String contact;
	
	@OneToOne
	@JoinColumn(name="u_id")
	Login u_id;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public Customer(String fname, String lname, String contact, Login u_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contact = contact;
		this.u_id = u_id;
	}


	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public Login getU_id() {
		return u_id;
	}
	public void setU_id(Login u_id) {
		this.u_id = u_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}


	public String getContact() {
		return contact;
	}


	public void setContact(String contact) {
		this.contact = contact;
	}
	
	
	
	
	
	

	
}
