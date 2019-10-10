import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mentor } from '../models/mentor.model';
import { MentorSigninService } from './mentorsignin.service';

@Component({
  selector: 'app-mentorsignin',
  templateUrl: './mentorsignin.component.html',
  styles: []
})
export class MentorSigninComponent implements OnInit {

  mentors: Mentor[];
  mentor:Mentor= new Mentor();

  constructor(private router: Router, private mentorsigninService: MentorSigninService) {

  }

  ngOnInit() {
    this.mentorsigninService.getMentor()
      .subscribe( data => {
        this.mentors = data;
      });
  };

  deleteMentor(mentor: Mentor): void {
    this.mentorsigninService.deleteMentor(mentor)
      .subscribe( data => {
        this.mentors = this.mentors.filter(u => u !== mentor);
      })
  };
  authenticate(userName,password):void{
    this.mentorsigninService.authenticate(userName,password).subscribe(data=>{
      if(data==null)
      {
        alert("incorrect");
      }
      else{
        this.router.navigate(['mentorfront']);
        sessionStorage.setItem('mid',data.id);
        localStorage.setItem('storementordata',JSON.stringify(data));
      }
    })
  }

}


