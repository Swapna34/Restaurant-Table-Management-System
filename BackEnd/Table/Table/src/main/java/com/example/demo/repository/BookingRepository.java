package com.example.demo.repository;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Booking;
import com.example.demo.Entity.Tables;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer>{
	
	@Query("SELECT t FROM Tables t WHERE t.t_id NOT IN " +
	           "(SELECT b.t_id FROM Booking b WHERE b.b_date = :bookingDate AND b.b_time = :bookingTime)")
	    List<Tables> findAvailableTables(@Param("bookingDate") Date bookingDate, @Param("bookingTime") int bookingTime);
	
	@Query(value = "SELECT * FROM p07_tablebookingsystem.Tablel t \r\n"
			+ "WHERE t.t_id IN (SELECT b.t_id FROM p07_tablebookingsystem.Booking b WHERE b.b_id =:b_id \r\n"
			+ "            AND b.b_id NOT IN (SELECT o.b_id FROM p07_tablebookingsystem.Order o WHERE o.b_id =:b_id))",
    nativeQuery = true)
List<Tables> getBookedTables(@Param("b_id") int b_id);
	
	@Query("SELECT b FROM Booking b WHERE b.b_date = CURRENT_DATE")
	List<Booking> getAllBookedTables();

}

