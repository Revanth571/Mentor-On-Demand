import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { MentorFrontService } from './mentorfront.service';

@Component({
  selector: 'app-front',
  templateUrl: './mentorfront.component.html',
  styles: []
})
export class MentorFrontComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private frontService: MentorFrontService) {

  }

  ngOnInit() {
    // this.frontService.getUsers()
    //   .subscribe( data => {
    //     this.users = data;
        
    //   });
    this.IsloginTrue();
    

      var getmentordata=JSON.parse(localStorage.getItem('storementordata'));
      console.log(getmentordata);
      document.getElementById('j').innerHTML=getmentordata.firstName+" "+getmentordata.lastName;
  }
  public IsloginTrue()
  {
    var sessionObj=JSON.parse(window.localStorage.getItem("data"));
            // window.localStorage.clear();

    if(sessionObj==null)
    {
      this.router.navigate(["/home"])
    }
  }

  deleteUser(user: User): void {
    this.frontService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  logout()
  {
    sessionStorage.removeItem("id");
    window.localStorage.clear();
    this.router.navigate(['mentorsignin']);
  }

}


