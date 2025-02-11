package com.knowit.LoginAndRegistration.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.knowit.LoginAndRegistration.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
}
