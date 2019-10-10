package com.example.admin;

public class ThePaymentDtls extends AuditModel {

	private static final long serialVersionUID = 1L;
	
	private int id;
	private String full_name;
	private String email;
	private String address;
	private String city;
	private String state;
	private String name_on_card;
	private String credit_card_number;
	private String exp_month;
	private String exp_year;
	private String cvv;
	
	
	
	
	public int getId() {
		return id;
	}




	public String getFull_name() {
		return full_name;
	}




	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getAddress() {
		return address;
	}




	public void setAddress(String address) {
		this.address = address;
	}




	public String getCity() {
		return city;
	}




	public void setCity(String city) {
		this.city = city;
	}




	public String getState() {
		return state;
	}




	public void setState(String state) {
		this.state = state;
	}




	public String getName_on_card() {
		return name_on_card;
	}




	public void setName_on_card(String name_on_card) {
		this.name_on_card = name_on_card;
	}




	public String getCredit_card_number() {
		return credit_card_number;
	}




	public void setCredit_card_number(String credit_card_number) {
		this.credit_card_number = credit_card_number;
	}




	public String getExp_month() {
		return exp_month;
	}




	public void setExp_month(String exp_month) {
		this.exp_month = exp_month;
	}




	public String getExp_year() {
		return exp_year;
	}




	public void setExp_year(String exp_year) {
		this.exp_year = exp_year;
	}




	public String getCvv() {
		return cvv;
	}




	public void setCvv(String cvv) {
		this.cvv = cvv;
	}




	public void setId(int id) {
		this.id = id;
	}




	



	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	

}
