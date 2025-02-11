package com.example.demo.controllers;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Booking;
import com.example.demo.Entity.BookingCheck;
import com.example.demo.Entity.Tables;
import com.example.demo.services.BookingServices;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/crud")
public class BookingController {
	@Autowired
	BookingServices bookingServices;
		
	@PostMapping("/bookTable")
	public Booking bookTable(@RequestBody BookingCheck bookcheck)
	{
		int cid=bookcheck.getC_id();
		int tid=bookcheck.getT_id();
		Date b_Date=bookcheck.getB_date();
		int b_time=bookcheck.getB_time();
		
		Booking bookT=new Booking(b_Date,b_time,cid,tid);
		return bookingServices.saveBooking(bookT);
	}
	
	@GetMapping("/getBookedTables")
	public List<Tables> getBookedTables(@RequestParam("b_id") int b_id)
	{
		List<Tables> listBooking=new ArrayList<Tables>();
		listBooking=bookingServices.getBookedTables(b_id);
		
		return listBooking;
	}
	
	@GetMapping("/getAllBookedTables")
	public List<Booking> getAllBookedTables() {
		
	    return bookingServices.getAllBookedTables();
	}
	
}
//@PostMapping("/checkBooking")
//public void checkBooking(@RequestBody BookingCheck bcheck)
//{
//	int bookingTime=bcheck.getB_time();
//	int tid=bcheck.getT_id();
//	if (bookingServices.checkBooking(tid,bookingTime)!=null)
//	{
//		System.out.println("Booked");
//	}
//	else
//	{
//		System.out.println("Not Booked");
//	}
//	
//}	