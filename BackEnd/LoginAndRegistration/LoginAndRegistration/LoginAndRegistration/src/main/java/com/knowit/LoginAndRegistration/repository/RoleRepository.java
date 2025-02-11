package com.knowit.LoginAndRegistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.knowit.LoginAndRegistration.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

}
