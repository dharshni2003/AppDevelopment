package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserRegisterEntity;
import com.example.demo.repository.UserRegisterRepository;

@Service
public class UserRegisterService implements UserRegisterServiceInterface {
	@Autowired
	private UserRegisterRepository r;
	@Override
	public List<UserRegisterEntity>getDetails()
	{
		return r.findAll();
	}

	@Override
	public void saveData(UserRegisterEntity e) {
		r.save(e);
	}

	@Override
	   public void updateUser(UserRegisterEntity e) 
	   {
		   r.save(e);
	   }

	@Override
	public void deleteData(int userid) {
		r.deleteById(userid);

	}

}
