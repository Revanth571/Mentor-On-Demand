import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThePayment } from '../models/thepayment.model';
import { ThePaymentService } from './thepayment.service';

@Component({
  templateUrl: './add-thepayment.component.html'
})
export class AddThePaymentComponent {

  thepayment: ThePayment = new ThePayment();

  constructor(private router: Router, private thepaymentService: ThePaymentService) {

  }

  createThePayment(): void {
    this.thepaymentService.createThePayment(this.thepayment)
        .subscribe( data => {
          alert("Payment created successfully.");
        });

  };

}
