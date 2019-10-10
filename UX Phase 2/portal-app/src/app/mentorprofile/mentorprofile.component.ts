import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { MentorProfileService } from './mentorprofile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './mentorprofile.component.html',
  styles: []
})
export class MentorProfileComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private profileService: MentorProfileService) {

  }

  ngOnInit() {
    this.profileService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getmentordata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getmentordata);
      document.getElementById('j').innerHTML=getmentordata.firstName+" "+getmentordata.lastName;
      document.getElementById('t').innerHTML="Mentor Profile:"+getmentordata.mentorProfile;
  };

  deleteUser(user: User): void {
    this.profileService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


