package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import java.sql.Date;
import java.util.List;

import com.example.demo.Entity.Tables;

@Repository
public interface TableRepository  extends JpaRepository<Tables, Integer> {
	
	@Query("SELECT t FROM Tables t WHERE t.b_time = :bookingTime AND t.t_id NOT IN " +
	"(SELECT b.t_id FROM Booking b WHERE b.b_date = :bookingDate AND b.b_time = :bookingTime)")
	List<Tables> findAvailableTables(@Param("bookingDate") Date bookingDate, @Param("bookingTime") int bookingTime);
	
	@Query("SELECT t FROM Tables t WHERE t.t_id NOT IN (SELECT b.t_id FROM Booking b WHERE b.b_date = CURRENT_DATE)")
	List<Tables> findNotBookedTables();

}

//SELECT * FROM p07_tablebookingsystem.Tablel t where t.b_time=11 and t.t_id NOT IN(SELECT b.t_id FROM p07_tablebookingsystem.Booking b WHERE b.b_date = "2025-02-03" AND b.b_time =11);

//@Query("SELECT t FROM Tables t WHERE t.b_time = :bookingTime AND t.t_id NOT IN " +
//"(SELECT b.t_id FROM Booking b WHERE b.b_date = :bookingDate AND b.b_time = :bookingTime)")
//List<Tables> findAvailableTables(@Param("bookingDate") Date bookingDate, @Param("bookingTime") int bookingTime);


//@Query("SELECT t FROM Tables t WHERE  t.t_id NOT IN " +
//"(SELECT b.t_id FROM Booking b WHERE b.b_date = :bookingDate AND b.b_time = :bookingTime)")
//List<Tables> findAvailableTables(@Param("bookingDate") Date bookingDate, @Param("bookingTime") int bookingTime);
