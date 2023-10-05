package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.adminentity;
import com.example.demo.repository.adminrepository;

@Service
public class adminservice {
	@Autowired
	private adminrepository repo;
	public List<adminentity> getadmin(){
		return repo.findAll();
	}
	public void postadmin(adminentity ae) {
		repo.save(ae);
	}

}
