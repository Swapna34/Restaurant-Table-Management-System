package com.knowit.LoginAndRegistration.entities;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="manager")
public class Manager {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int m_id;

	private String fname;
	private String lname;
	@Column(name="contact_no")
	private String contactNo;
	
	private boolean is_Active;
	
	@OneToOne
	@JoinColumn(name="u_id")
	Login u_id;
	
	@ManyToOne
	@JoinColumn(name="h_id")
	Hotel h_id;

	public Manager() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Manager(String fname, String lname, String contactNo, boolean is_Active, Login u_id, Hotel h_id) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.contactNo = contactNo;
		this.is_Active = is_Active;
		this.u_id = u_id;
		this.h_id = h_id;
	}

	public int getM_id() {
		return m_id;
	}

	public void setM_id(int m_id) {
		this.m_id = m_id;
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

	public String getContactNo() {
		return contactNo;
	}

	public void setContactNo(String contactNo) {
		this.contactNo = contactNo;
	}

	public boolean isIs_Active() {
		return is_Active;
	}

	public void setIs_Active(boolean is_Active) {
		this.is_Active = is_Active;
	}

	public Login getU_id() {
		return u_id;
	}

	public void setU_id(Login u_id) {
		this.u_id = u_id;
	}

	public Hotel getH_id() {
		return h_id;
	}

	public void setH_id(Hotel h_id) {
		this.h_id = h_id;
	}


	
	

}
/*
 * CREATE TABLE `manager` ( `m_id` int NOT NULL AUTO_INCREMENT, `u_id` int NOT
 * NULL, `fname` varchar(45) NOT NULL, `lname` varchar(45) NOT NULL, `contactNo`
 * varchar(45) NOT NULL, `h_id` int NOT NULL, `is_Active` tinyint NOT NULL,
 * PRIMARY KEY (`m_id`), UNIQUE KEY `m_id_UNIQUE` (`m_id`), UNIQUE KEY
 * `contactNo_UNIQUE` (`contactNo`), UNIQUE KEY `h_id_UNIQUE` (`h_id`), KEY
 * `uid` (`u_id`), CONSTRAINT `hid` FOREIGN KEY (`h_id`) REFERENCES `hotel`
 * (`Id`) ON DELETE CASCADE ON UPDATE CASCADE, CONSTRAINT `uid` FOREIGN KEY
 * (`u_id`) REFERENCES `users` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE )
 */