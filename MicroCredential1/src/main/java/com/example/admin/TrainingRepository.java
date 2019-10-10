package com.example.admin;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingRepository extends Repository<Training, Integer>{
	
	void delete(Training training);
	List<Training> findAll();
	Training findOne(int id);
	Training save(Training training);
	
	@Query("select training from Training training where training.mentor.id=?")
	List<Training> findTrainingByMentorId(int mentorId);
	
	List<Training> findTrainingByUsersId(int userId);
	
	@Query("select training from Training training where training.id=? and training.mentor.id=?")
	Training findByIdAndMentorId(int id, int mentorId);
	Training findByIdAndUsersId(int trainingId, int userId);
	List<Training> findByStartDateBetween(String startDate,String startDate2);
	List<Training> findTrainingByUsersIdAndStatusEquals(int userId, String status);

	List<Training> findTrainingByMentorIdAndStatusEquals(int mentorId, String status);
	
}
