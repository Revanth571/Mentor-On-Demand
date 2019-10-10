package com.example.admin;

import java.util.Date;
import java.util.List;


public interface TrainingService {

	Training create(Training training);

	Training delete(int id);

	    List<Training> findAll();

	    Training findById(int id);

	    Training update(Training training);
	    
	    List<Training> findTrainingByMentorId(int mentorId);
	    List<Training> findTrainingByUsersId(int userId);
	    Training findByIdAndMentorId(int trainingId, int mentorId);
	    Training findByIdAndUsersId(int trainingId, int userId);
	    
	    List<Training> findByStartDateBetween(String startDate,String startDate2);

		List<Training> findTrainingByUsersIdAndStatusEquals(int userId, String status);

		List<Training> findTrainingByMentorIdAndStatusEquals(int mentorId, String status);
}
