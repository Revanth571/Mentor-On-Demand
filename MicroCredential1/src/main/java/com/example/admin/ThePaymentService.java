package com.example.admin;

import java.util.List;


public interface ThePaymentService {

	ThePayment create(ThePayment payment);

	ThePayment delete(String full_name);

	    List<ThePayment> findAll();

	    

	    ThePayment update(ThePayment payment);

		ThePayment findByFullName(String full_name);
		
		
		List<ThePayment> findThePaymentByMentorId(int mentorId);

		List<ThePayment> findThePaymentByUserId(int userId);

		
	

		
}
