import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { AdminnService } from './adminn.service';

@Component({
  selector: 'app-adminn',
  templateUrl: './adminn.component.html',
  styles: []
})
export class AdminnComponent implements OnInit {

  users: User[];

  usr:String = null;
  pwd:String = null;
  validate():void{
    if(this.usr == 'admin' && this.pwd == 'admin')
    {
      location.href = '/admin';
    }
    else if(this.usr == null && this.pwd == null)
    {
      alert("Please enter the username or password");
    }
    else{
      alert("Invalid credentials");
    }
  }

  constructor(private router: Router, private adminnService: AdminnService) {

  }

  ngOnInit() {
    this.adminnService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  deleteUser(user: User): void {
    this.adminnService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

}


