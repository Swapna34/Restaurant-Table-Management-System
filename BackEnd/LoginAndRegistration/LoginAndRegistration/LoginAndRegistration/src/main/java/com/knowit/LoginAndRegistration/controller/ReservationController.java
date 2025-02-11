package com.knowit.LoginAndRegistration.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.knowit.LoginAndRegistration.entities.TableEntity;
import com.knowit.LoginAndRegistration.service.ReservationService;
import com.knowit.LoginAndRegistration.service.TableService;

import java.util.List;

@RestController
@RequestMapping("/availability")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;
    @Autowired
    private TableService tableService;
    

    // Endpoint to check availability
//    @PostMapping
//    public List<TableEntity> checkAvailability(@RequestBody AvailabilityRequest request) {
//        // Call the service to check availability for the given date
//        return reservationService.checkAvailability(request.getDate());
//    }
    @PostMapping("/availability")
    public List<TableEntity> checkAvailability(@RequestBody AvailabilityRequest request) {
        System.out.println("Received date: " + request.getDate());
        List<TableEntity> availableTables = tableService.getAvailableTablesForDate(request.getDate());
        System.out.println("Available Tables: " + availableTables);  // Log the available tables
        return availableTables;
    }

}
