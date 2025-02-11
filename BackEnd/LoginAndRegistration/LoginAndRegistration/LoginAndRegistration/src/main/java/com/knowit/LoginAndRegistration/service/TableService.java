package com.knowit.LoginAndRegistration.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.knowit.LoginAndRegistration.entities.Day;
import com.knowit.LoginAndRegistration.entities.TableEntity;
import com.knowit.LoginAndRegistration.repository.DayRepository;
import com.knowit.LoginAndRegistration.repository.TableRepository;

@Service
public class TableService {
	@Autowired
    private TableRepository tableRepository;

    @Autowired
    private DayRepository dayRepository;

    // Method to find available tables for a specific date
    public List<TableEntity> getAvailableTablesForDate(String date) {
    	System.out.println(date);
    	System.out.println("day");
    	
        // Find the day entry by the provided date
        Optional<Day> day = dayRepository.findByDate(date);

        if (day.isPresent()) {
            List<TableEntity> availableTables = day.get().getTables().stream()
                .filter(TableEntity::isAvailable)
                .collect(Collectors.toList());
            System.out.println(availableTables);
            System.out.println("emptyy");
            return availableTables;
        }
        //return List.of();  // Return empty list if no matching date is found

        System.out.println("no date matching");
        return List.of();  // Return empty list if no such date exists
    }

	public TableEntity saveTable(TableEntity table) {
        return tableRepository.save(table); // Saves table data to MySQL
    }

    public TableEntity findById(int id) {
        return tableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Table not found"));
    }

    public List<TableEntity> getAllTables() {
        return tableRepository.findAll(); // Fetches all tables
    }
    
    
}
