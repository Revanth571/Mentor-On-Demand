import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ThePayment } from '../models/thepayment.model';
import { ThePaymentService } from './thepayment.service';

@Component({
  selector: 'app-thepayment',
  templateUrl: './thepayment.component.html',
  styles: []
})
export class ThePaymentComponent implements OnInit {

  thepayments: ThePayment[];
  thepayment:ThePayment= new ThePayment();

  id: String;
  mid: String;

  constructor(private router: Router, private thepaymentService: ThePaymentService) {

  }

 

  ngOnInit() {
    
    this.mid=sessionStorage.getItem("mid");
    if(this.mid!=null){
        this.thepaymentService.getThePaymentByMentor()
          .subscribe( data => {
            this.thepayments = data;
          });}
      else{
        this.thepaymentService.getThePayment()
          .subscribe( data => {
            this.thepayments = data;
          });
        }

  };


  deleteThePayment(thepayment: ThePayment): void {
    this.thepaymentService.deleteThePayment(thepayment)
      .subscribe( data => {
        this.thepayments= this.thepayments.filter(u => u !== thepayment);
      })
  };

}


