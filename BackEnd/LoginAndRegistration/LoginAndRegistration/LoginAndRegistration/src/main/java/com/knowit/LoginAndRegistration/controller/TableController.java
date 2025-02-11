package com.knowit.LoginAndRegistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.knowit.LoginAndRegistration.entities.*;
import com.knowit.LoginAndRegistration.service.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tables")
public class TableController {
    @Autowired
    private TableService tableService;

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private DayService dayService;

    @PostMapping("/add")
    public TableEntity addTable(@RequestBody TableEntity table) {
        return tableService.saveTable(table);
    }

    @PostMapping("/reserve")
    public TableEntity reserveTable(@RequestParam int tableId, @RequestBody Reservation reservation) {
        TableEntity table = tableService.saveTable(tableService.findById(tableId));
        table.setAvailable(false);
        table.setReservation(reservationService.saveReservation(reservation));
        return tableService.saveTable(table);
    }

    @GetMapping("/all")
    public List<TableEntity> getAllTables() {
        return tableService.getAllTables();
    }
    
 // POST request to check table availability for a specific date
    @PostMapping("/availability")
    public List<TableEntity> checkAvailability(@RequestBody AvailabilityRequest request) {
        // Extract the date from the request and call service to get available tables
    	System.out.println(tableService.getAvailableTablesForDate(request.getDate()));
    	System.out.println("availbe");
        return tableService.getAvailableTablesForDate(request.getDate());
    }
}
