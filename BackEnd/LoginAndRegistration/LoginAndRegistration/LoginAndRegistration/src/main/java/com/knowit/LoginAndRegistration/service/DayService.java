package com.knowit.LoginAndRegistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.knowit.LoginAndRegistration.entities.Day;
import com.knowit.LoginAndRegistration.repository.DayRepository;

@Service
public class DayService {
    @Autowired
    private DayRepository dayRepository;

    public Day saveDay(Day day) {
        return dayRepository.save(day);
    }
}
