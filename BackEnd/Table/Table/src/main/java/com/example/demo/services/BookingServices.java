package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Booking;
import com.example.demo.Entity.Tables;
import com.example.demo.repository.BookingRepository;

@Service
public class BookingServices {
	
	@Autowired
	BookingRepository bookingRepository;
	
	public Booking saveBooking(Booking b)
	{
		return bookingRepository.save(b);
	}
	
	public List<Tables> getBookedTables(int b_id)
	{
		return bookingRepository.getBookedTables(b_id);
	}
	
public List<Booking> getAllBookedTables() {
		
		return bookingRepository.getAllBookedTables();
	}
}








//public Booking checkBooking(int tid ,int b_time)
//{
//	Optional<Booking> ol = bookingRepository.checkBooking(tid, b_time);
//	if (ol.isPresent()) {
//        return ol.get();
//    } else {
//        return null; // Log or handle this case
//    }
//}