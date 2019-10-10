package com.example.admin;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
@RequestMapping({"/trainings"})
public class TrainingController {
	
	@Autowired
	private TrainingService trainerService;
	
	
	@PostMapping
    public Training create(@RequestBody Training training){
        return trainerService.create(training);
    }

    @GetMapping(path = {"/{id}"})
    public Training findOne(@PathVariable("id") int id){
        return trainerService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Training update(@PathVariable("id") int id, @RequestBody Training training){
    	training.setId(id);
        return trainerService.update(training);
    }

    @DeleteMapping(path ={"/{id}"})
    public Training delete(@PathVariable("id") int id) {
        return trainerService.delete(id);
    }

    @GetMapping
    public List<Training> findAll(){
        return trainerService.findAll();
    }
    
    @GetMapping("/findTrainingByMentorId/{mentorId}")
    public List<Training> getTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
        return trainerService.findTrainingByMentorId(mentorId);
    }
    
    @GetMapping("/findTrainingByUserId/{userId}")
    public List<Training> getTrainingByUsersId(@PathVariable(value = "userId") int userId) {
        return trainerService.findTrainingByUsersId(userId);
    }
    @GetMapping("/findByIdAndMentorId/{id}/{mentorId}")
    public Training getfindByIdAndMentorId(@PathVariable(value = "id") int Id, @PathVariable(value = "mentorId") int mentorId) {
    	System.out.println(trainerService.findByIdAndMentorId(Id, mentorId));
    	return trainerService.findByIdAndMentorId(Id, mentorId);
    }
    
    @GetMapping("/findByIdAndUserId/{id}/{userId}")
    public Training getfindByIdAndUsersId(@PathVariable(value = "id") int Id, @PathVariable(value = "userId") int userId) {
    	System.out.println(trainerService.findByIdAndUsersId(Id, userId));
    	return trainerService.findByIdAndUsersId(Id, userId);
    }
    
    @GetMapping("/findByStartDate/{startDate}/{startDate2}")
    public List<Training> getStartDate(@PathVariable("startDate")String startDate,@PathVariable("startDate2")String startDate2)
    {
    	return trainerService.findByStartDateBetween(startDate,startDate2);
    }
    
    @GetMapping("/findTrainingByUsersIdAndStatusEquals/{userId}/{status}")
    public List<Training> getTrainingByUsersIdAndStatusEquals(@PathVariable(value = "userId") int userId,@PathVariable(value = "status") String status) {
        return trainerService.findTrainingByUsersIdAndStatusEquals(userId, status);
    }
    
    @GetMapping("/findTrainingByMentorIdAndStatusEquals/{mentorId}/{status}")
	public List<Training> getTrainingByMentorIdAndStatusEquals(@PathVariable(value = "mentorId") int mentorId, @PathVariable(value = "status") String status) {
		return trainerService.findTrainingByMentorIdAndStatusEquals(mentorId, status);
	}
    
    //@DateTimeFormat(Pattern="yyyy-mm-dd")Date startDate
}
