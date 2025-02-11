package com.knowit.LoginAndRegistration.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class Login {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="u_id")
	private int uid;
	
	private String email;
	
	@Column(name="password")
	private String pwd;
	
	@ManyToOne
	@JoinColumn(name="r_id")
	Role rid;

	public Login() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public Login(int uid, String pwd, Role rid) {
		super();
		this.uid = uid;
		this.pwd = pwd;
		this.rid = rid;
	}


	public Login(String email, String pwd, Role rid) {
		super();
		this.email = email;
		this.pwd = pwd;
		this.rid = rid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public Role getRid() {
		return rid;
	}

	public void setRid(Role rid) {
		this.rid = rid;
	}


	
	
	
	
	
}
/*
 * CREATE TABLE `users` ( `u_id` int NOT NULL AUTO_INCREMENT, `email`
 * varchar(255) DEFAULT NULL, `password` varchar(255) NOT NULL, `r_id` int NOT
 * NULL, PRIMARY KEY (`u_id`), KEY `r_id_idx` (`r_id`), CONSTRAINT `r_id`
 * FOREIGN KEY (`r_id`) REFERENCES `roles` (`r_id`) ON DELETE CASCADE ON UPDATE
 * CASCADE )
 */
