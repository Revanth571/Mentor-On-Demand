import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../models/training.model';
import { TrainingService } from './training.service';

@Component({
  //selector: 'app-training',
  templateUrl: './userdetails.component.html',
  //styleUrls: ['./usertraini.component.css']
})
export class UserdetailsComponent implements OnInit {
  training: Training[];
  
  id: String;
  constructor(private router: Router, private trainingService: TrainingService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    if(this.id==null){
    this.trainingService.getTrainingByUser()
      .subscribe( data => {
        this.training = data;
      });}
      else{
        this.trainingService.getTraining()
          .subscribe( data => {
            this.training = data;
          });
        }

  };

  


}
