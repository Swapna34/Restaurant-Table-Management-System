package com.knowit.LoginAndRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knowit.LoginAndRegistration.entities.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer>{

}
