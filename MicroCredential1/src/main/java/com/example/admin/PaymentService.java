package com.example.admin;

import java.util.List;


public interface PaymentService {

	Payment create(Payment payment);

	Payment delete(int id);

	    List<Payment> findAll();

	    Payment findById(int id);

	    Payment update(Payment payment);
}
