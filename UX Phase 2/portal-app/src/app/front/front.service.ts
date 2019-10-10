import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Training } from '../models/training.model';
import { ThePayment } from '../models/thepayment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FrontService {

  id:String;

  constructor(private http:HttpClient) {}

  private paymentUrl='http://localhost:8071/thepayments';
  private trainingUrl='http://localhost:8071/training';

  private userUrl = 'http://localhost:8071/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  
  public getThePayment()
  {
    this.id=sessionStorage.getItem("id");
    return this.http.get<ThePayment[]>(this.paymentUrl+"/findThePaymentByUserId/"+this.id);
  }

  public getTrainings(Pid)
  {
    return this.http.get<Training>(this.trainingUrl+"/"+Pid);
  }
  
  public Payfees(payid,amount)
  {
    return this.http.get<ThePayment>(this.paymentUrl+"/payfees/"+payid+"/"+amount)
  }

}
