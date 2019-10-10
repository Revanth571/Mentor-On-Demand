package com.example.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping({"/thepayments"})
public class ThePaymentController {

	@Autowired
	private ThePaymentService thepaymentService;
	
	
	@PostMapping
    public ThePayment create(@RequestBody ThePayment payment){
        return thepaymentService.create(payment);
    }
	
	
	
	
	

    @GetMapping(path = {"/{full_name}"})
    public ThePayment findOne(@PathVariable("full_name") String full_name){
        return thepaymentService.findByFullName(full_name);
    }

    @PutMapping(path = {"/{full_name}"})
    public ThePayment update(@PathVariable("full_name") String full_name, @RequestBody ThePayment thepayment){
        thepayment.setCvv(full_name);
        return thepaymentService.update(thepayment);
    }

    @DeleteMapping(path ={"/{full_name}"})
    public ThePayment delete(@PathVariable("full_name") String full_name) {
        return thepaymentService.delete(full_name);
    }

    @GetMapping
    public List<ThePayment> findAll(){
        return thepaymentService.findAll();
    }
    
    @GetMapping("/findThePaymentByUserId/{userId}")
    public List < ThePayment > findThePaymentByUserId(@PathVariable(value = "userId") int userId) {
        return thepaymentService.findThePaymentByUserId(userId);
    }
    
    
    
    
    @GetMapping("/findThePaymentByMentorId/{mentorId}")
	public List<ThePayment> getThePaymentByMentorId(@PathVariable(value = "mentorId") int mentorId) {
		return thepaymentService.findThePaymentByMentorId(mentorId);
	}
}
