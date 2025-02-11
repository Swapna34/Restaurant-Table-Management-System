package com.example.demo.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

public class BookingCheck {
	
	int t_id;
	int b_time;
	Date b_date;
	int c_id;
	
	public int getC_id() {
		return c_id;
	}
	public void setC_id(int c_id) {
		this.c_id = c_id;
	}
	public Date getB_date() {
		return b_date;
	}
	public void setB_date(Date b_date) {
		this.b_date = b_date;
	}
	
	public int getT_id() {
		return t_id;
	}
	public void setT_id(int t_id) {
		this.t_id = t_id;
	}
	
	public int getB_time() {
		return b_time;
	}
	public void setB_time(int b_time) {
		this.b_time = b_time;
	}
}
