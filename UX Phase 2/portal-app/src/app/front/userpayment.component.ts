import  {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { Training } from '../models/training.model';
import { ThePayment} from '../models/thepayment.model';
import { FrontService } from './front.service';

@Component({
	selector: 'my-employee18',
    templateUrl: './userpayment.component.html'
    //styleUrls: ['./userreceipt.component.css']
})
export class UserpaymentComponent implements OnInit
{   
   
    payments: ThePayment[];
	trainings: Training=new Training();
    showId=false;
    users=sessionStorage.getItem('fname');
	Payid;
	amt;
    constructor(private router: Router, private frontService: FrontService)
	{
    
    }

    ngOnInit(){
	
		this.frontService.getThePayment()
		.subscribe(data1=>{
			this.payments=data1;
		});


	}


	getTrainings(Pid,amount,payid)
	{
		this.Payid=payid;
		this.amt=amount;
		
		this.frontService.getTrainings(Pid)
		.subscribe(data=>{
			this.trainings=data;
		});
		this.showId=!this.showId;
		
	}

	Payfees(amount){

		if(this.amt==0)
		{
			this.frontService.Payfees(this.Payid,amount)
		.subscribe(data=>{
			alert("Fees Paid Successfully!");
		});
		
		}
		else{
			alert("Fees Already Paid");
		}
	}

    logout()
    {
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('fname');
        sessionStorage.removeItem('id');
        this.router.navigate(['home']);
        
    }
}


