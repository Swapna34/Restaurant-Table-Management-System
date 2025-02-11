package com.knowit.LoginAndRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.knowit.LoginAndRegistration.entities.TableEntity;

public interface TableRepository extends JpaRepository<TableEntity, Integer> {
	
}
