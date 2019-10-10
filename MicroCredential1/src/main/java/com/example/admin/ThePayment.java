package com.example.admin;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="thepayment")
public class ThePayment  extends AuditModel{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	
	
	@Column(name="full_name")
	private String full_name;
	
	@Column(name="email")
	private String email;
	
	@Column(name="address")
	private String address;
	
	@Column(name="city")
	private String city;
	
	
	@Column(name="state")
	private String state;
	
	@Column(name="name_on_card")
	private String name_on_card;
	
	@Column(name="credit_card_number")
	private String credit_card_number;
	
	@Column(name="exp_month")
	private String exp_month;
	
	@Column(name="exp_year")
	private String exp_year;
	
	@Column(name="cvv")
	private String cvv;
	
	@Column(name="mentor_id")
	private int mentorId;
	
	@Column(name="userId")
	private int userId;
	
	
	@Column(name="techName")
	private String techName;
	
	@Column(name="mentorName")
	private String mentorName;
	
	@Column(name="amount")
	private int amount;
	
	

	

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getTechName() {
		return techName;
	}

	public void setTechName(String techName) {
		this.techName = techName;
	}

	public String getMentorName() {
		return mentorName;
	}

	public void setMentorName(String mentorName) {
		this.mentorName = mentorName;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	@Column(name="training_id")
	private long trainingId;
	
	@Column(name="payment_type")
	private String paymentType;
	

	

	

	
	
	public long getMentorId() {
		return mentorId;
	}

	public void setMentorId(int mentorId) {
		this.mentorId = mentorId;
	}

	public long getTrainingId() {
		return trainingId;
	}

	public void setTrainingId(long trainingId) {
		this.trainingId = trainingId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	
	
	
	
}
