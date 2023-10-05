package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserRegisterEntity;

public interface UserRegisterServiceInterface {
	 public List<UserRegisterEntity>getDetails();
	    public void saveData(UserRegisterEntity e);
	    public void updateUser(UserRegisterEntity e);
	    public void deleteData(int userid);
}
