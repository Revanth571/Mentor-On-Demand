import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Training } from '../models/training.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CurrentService {

  constructor(private http:HttpClient) {}
  id: String;
  mid: String;
  

  private userUrl = 'http://localhost:8071/trainings';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getTrainingByUser() {
    this.id=sessionStorage.getItem("id");
    return this.http.get<Training[]>(this.userUrl+"/findTrainingByUsersIdAndStatusEquals/"+this.id+"/Incomplete");
  }
  public getTrainingByMentor() {
    this.mid=sessionStorage.getItem("mid");
    alert(this.userUrl+"/findTrainingByMentorIdAndStatusEquals/"+this.mid+"/Incomplete");
    return this.http.get<Training[]>(this.userUrl+"/findTrainingByMentorIdAndStatusEquals/"+this.mid+"/Incomplete");
  }
  public getTraining1() {
    
    return this.http.get<Training[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

}
