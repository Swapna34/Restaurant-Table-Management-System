package com.example.demo.controllers;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Tables;
import com.example.demo.services.TableServices;


//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/crud")
public class TableController {
	@Autowired
	TableServices tableService;
	
	@GetMapping("/getAvailTable")
	public List<Tables> getAvailableTables(@RequestParam Date bookingDate, @RequestParam int bookingTime) {
        return tableService.getAvailableTables(bookingDate, bookingTime);
    }
	
	@GetMapping("/getNotBookedTables")
    public List<Tables> getNotBookedTables() {
    return tableService.getNotBookedTablesForToday();
    }
	
	@PostMapping("/saveTable")
    public Tables SaveTable(@RequestBody Tables t)
    {
    	return tableService.saveTable(t);
    }

}

//@GetMapping("/getTable")
//public void getTable(@RequestParam("t_id") int t_id)
//{
//	Tables table=new Tables();
//	table=tableService.getTable(t_id);	
//	if(table.getStatus()=="Available")
//	{
//		
//	}
//	//else
//		//checkBooking
//}


//public List<Tables> getAllTables()
//{
//	List<Tables> list=new ArrayList<Tables>();
//	list =tableService.getAllTables();
//	return list;	
//}

