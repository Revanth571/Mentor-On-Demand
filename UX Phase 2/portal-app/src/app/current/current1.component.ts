import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { CurrentService } from '../current/current.service';
import { Training } from '../models/training.model';


@Component({
  selector: 'app-current',
  templateUrl: './current1.component.html',
  styles: []
})
export class Current1Component implements OnInit {

  users: User[];

  training: Training[];
  id: String;
  mid: String;
  constructor(private router: Router, private currentService: CurrentService) {

  }

  ngOnInit() {
    this.id=sessionStorage.getItem("id");
    this.mid=sessionStorage.getItem("mid");
    if(this.id!=null){
    this.currentService.getTrainingByUser()
      .subscribe( data => {
        this.training = data;
      });}
      else  if(this.mid!=null){
        this.currentService.getTrainingByMentor()
          .subscribe( data => {
            this.training = data;
          });}
      else{
        this.currentService.getTraining1()
          .subscribe( data => {
            this.training = data;
          });
        }

  };

  deleteUser(user: User): void {
    this.currentService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  search(startDate,endDate):void{
    sessionStorage.setItem('startDate',startDate);
    sessionStorage.setItem('endDate',endDate);
    this.router.navigate(['completed']);
  }

}


