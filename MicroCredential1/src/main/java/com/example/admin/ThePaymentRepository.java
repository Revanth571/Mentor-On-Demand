package com.example.admin;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface ThePaymentRepository extends Repository<ThePayment, Integer>{
	
	void delete(ThePayment payment);
	List<ThePayment> findAll();
	
	@Query("select thepayment from ThePayment thepayment where thepayment.full_name=?")
	ThePayment findOne(String fullName);
	ThePayment save(ThePayment payment);
	//List<ThePayment> findThePaymentByUsersId(int userId);
	
	//@Query("select thepayment from ThePayment thepayment where thepayment.mentor_id=?")
	List<ThePayment> findThePaymentByMentorId(int mentorId);
	List<ThePayment> findThePaymentByUserId(int userId);
	



}
