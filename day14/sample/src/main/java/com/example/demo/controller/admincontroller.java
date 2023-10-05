package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.adminentity;
import com.example.demo.service.adminservice;

@RestController
public class admincontroller {
	@Autowired
	private adminservice service;
	@GetMapping("/getadmin")
	public List<adminentity> getadmin(){
		return service.getadmin();
	}
	@PostMapping("/postadmin")
	public void postadmin(@RequestBody adminentity ae) {
		service.postadmin(ae);
	}

}
