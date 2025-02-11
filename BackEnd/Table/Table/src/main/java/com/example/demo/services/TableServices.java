package com.example.demo.services;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Tables;
import com.example.demo.repository.TableRepository;


@Service
public class TableServices {
	@Autowired 
	TableRepository tablerepository;

	public Tables getTable(int t_id) {
		
		return tablerepository.findById(t_id).get();
		
	}
	
	public List<Tables> getAllTables()
	{
		return tablerepository.findAll();
	}

	 public TableServices(TableRepository tableRepository) {
	        this.tablerepository = tableRepository;
	    }

	    public List<Tables> getAvailableTables(Date bookingDate, int bookingTime) {
	        return tablerepository.findAvailableTables(bookingDate, bookingTime);
	    }
	    
	    public List<Tables> getNotBookedTablesForToday() {
    	    return tablerepository.findNotBookedTables();
    	}
	    public Tables saveTable(Tables T) {
			
			return tablerepository.save(T);
			
		}
}
//<dependency>
//<groupId>com.knowit</groupId>
//<artifactId>demo</artifactId>
//<version>0.0.1-SNAPSHOT</version>
//</dependency>
