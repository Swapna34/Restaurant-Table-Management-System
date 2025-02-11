package com.knowit.LoginAndRegistration.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import com.knowit.LoginAndRegistration.entities.Day;
import java.util.Optional;

public interface DayRepository extends JpaRepository<Day, Integer> {
    // Custom query to find a Day by its date
    Optional<Day> findByDate(String date);
}
