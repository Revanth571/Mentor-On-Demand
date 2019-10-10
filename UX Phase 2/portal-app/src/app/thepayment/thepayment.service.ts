import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ThePayment } from '../models/thepayment.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ThePaymentService { 

  constructor(private http:HttpClient) {}

  
  mid: String;

  private thepaymentUrl = 'http://localhost:8071/thepayments';
  //private userUrl = '/api';

  public getThePayment() {
    return this.http.get<ThePayment[]>(this.thepaymentUrl);
  }

  public getThePaymentByMentor() {
    this.mid=sessionStorage.getItem("mid");
    
    return this.http.get<ThePayment[]>(this.thepaymentUrl+"/findThePaymentByMentorId/"+this.mid);
  }

  public deleteThePayment(thepayment) {
    return this.http.delete(this.thepaymentUrl + "/"+ thepayment.id);
  }

  public createThePayment(thepayment) {
    return this.http.post<ThePayment>(this.thepaymentUrl, thepayment);
  }

}
