package com.example.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ThePaymentServiceImpl implements ThePaymentService{
	
	@Autowired
	private ThePaymentRepository repository;

	@Override
	public ThePayment create(ThePayment payment) {
		
		return repository.save(payment);
	}

	

	@Override
	public ThePayment update(ThePayment payment) {
		
		return repository.save(payment);
	}



	@Override
	public ThePayment delete(String full_name) {
		// TODO Auto-generated method stub
		ThePayment payment = findByFullName(full_name);
		if(payment != null) {
			repository.delete(payment);
		}
		return payment;
	}



	@Override
	public List<ThePayment> findAll() {
		// TODO Auto-generated method stub
		return repository.findAll();
	}



	@Override
	public ThePayment findByFullName(String fullName) {
		// TODO Auto-generated method stub
		return repository.findOne(fullName);
	}



	


	@Override
	public List<ThePayment> findThePaymentByMentorId(int mentorId) {
		// TODO Auto-generated method stub
		return repository.findThePaymentByMentorId(mentorId);
	}



	@Override
	public List<ThePayment> findThePaymentByUserId(int userId) {
		// TODO Auto-generated method stub
		return repository.findThePaymentByUserId(userId) ;
	}



	



	

}
