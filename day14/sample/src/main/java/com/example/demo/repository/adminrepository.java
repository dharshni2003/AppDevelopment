package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.adminentity;

public interface adminrepository extends JpaRepository<adminentity, Integer> {

}
