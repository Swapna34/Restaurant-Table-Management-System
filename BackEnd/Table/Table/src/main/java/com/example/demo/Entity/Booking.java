package com.example.demo.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
	
@Entity
@Table(name="booking")
public class Booking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="b_id")
	int b_id;
	Date b_date;
	int b_time;
	
	int c_id;
	int t_id;
//	@ManyToOne
//	@JoinColumn(name="t_id", referencedColumnName="t_id")
//	Tables t_id;
	
	
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(Date b_date, int b_time, int c_id, int t_id) {
		super();
		//this.b_id = b_id;
		this.b_date = b_date;
		this.b_time = b_time;
		this.c_id = c_id;
		this.t_id = t_id;
	}

	public int getB_id() {
		return b_id;
	}

	public void setB_id(int b_id) {
		this.b_id = b_id;
	}

	public Date getB_date() {
		return b_date;
	}

	public void setB_date(Date b_date) {
		this.b_date = b_date;
	}

	public int getB_time() {
		return b_time;
	}

	public void setB_time(int b_time) {
		this.b_time = b_time;
	}

	public int getC_id() {
		return c_id;
	}

	public void setC_id(int c_id) {
		this.c_id = c_id;
	}

	public int getT_id() {
		return t_id;
	}

	public void setT_id(int t_id) {
		this.t_id = t_id;
	}
}
