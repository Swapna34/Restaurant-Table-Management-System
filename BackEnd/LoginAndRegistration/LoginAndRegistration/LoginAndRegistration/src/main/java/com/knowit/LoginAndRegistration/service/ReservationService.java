package com.knowit.LoginAndRegistration.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.knowit.LoginAndRegistration.entities.Reservation;
import com.knowit.LoginAndRegistration.entities.TableEntity;
import com.knowit.LoginAndRegistration.repository.ReservationRepository;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    private TableService tableService; // Inject TableService to check availability


    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }
    public List<TableEntity> checkAvailability(String date) {
        // Call the TableService to get available tables for the given date
        return tableService.getAvailableTablesForDate(date);
    }
}
