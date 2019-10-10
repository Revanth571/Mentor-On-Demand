import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { FrontService } from './front.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styles: []
})
export class FrontComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private frontService: FrontService) {

  }

  ngOnInit() {
    this.frontService.getUsers()
      .subscribe( data => {
        this.users = data;
      });

      var getuserdata=JSON.parse(localStorage.getItem('storeuserdata'));
      console.log(getuserdata);
      document.getElementById('j').innerHTML=getuserdata.firstName+" "+getuserdata.lastName;
  };

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
    this.router.navigate(['signin']);
  }

}


