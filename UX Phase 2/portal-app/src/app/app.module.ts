import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';


import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor/mentor.component';
import { FrontComponent } from './front/front.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { CurrentComponent } from './current/current.component';
import { AdminComponent } from './admin/admin.component';
import { AdminnComponent } from './adminn/adminn.component';
import { MentorSigninComponent } from './mentorsignin/mentorsignin.component';
import { TechnologyComponent } from './technology/technology.component';
import { AddTechnologyComponent } from './technology/add-technology.component';
import { SkillComponent } from './skill/skill.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { AddMentorComponent } from './mentor/add-mentor.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './training/add-training.component';
import { ThePaymentComponent } from './thepayment/thepayment.component';
import { AddThePaymentComponent } from './thepayment/add-thepayment.component';
import { MentorFrontComponent } from './mentorfront/mentorfront.component';
import { MentorProfileComponent } from './mentorprofile/mentorprofile.component';
import { UserdetailsComponent} from './training/userdetails.component';
import { MentordetailsComponent} from './training/mentordetails.component';





import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';

import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { HomeService } from './home/home.service';
import { MentorService } from './mentor/mentor.service';
import { FrontService } from './front/front.service';
import { ProfileService } from './profile/profile.service';
import { PaymentsService } from './payments/payments.service';
import { CurrentService } from './current/current.service';
import { AdminService } from './admin/admin.service';
import { AdminnService } from './adminn/adminn.service';
import { MentorSigninService } from './mentorsignin/mentorsignin.service';
import { TechnologyService } from './technology/technology.service';
import { SkillService } from './skill/skill.service';
import { TrainingService } from './training/training.service';
import { ThePaymentService } from './thepayment/thepayment.service';
import { MentorFrontService } from './mentorfront/mentorfront.service';
import { MentorProfileService } from './mentorprofile/mentorprofile.service';
import { UserpaymentComponent} from './front/userpayment.component';
import { Training1Component } from './training/training1.component';






import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';

import{RouterModule} from '@angular/router';
import { Current1Component } from './current/current1.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    MentorComponent,
    FrontComponent,
    ProfileComponent,
    PaymentsComponent,
    CurrentComponent,
    AdminComponent,
    AdminnComponent,
    MentorSigninComponent,
    TechnologyComponent,
    AddTechnologyComponent,
    SkillComponent,
    AddSkillComponent,
    AddMentorComponent,
    TrainingComponent,
    AddTrainingComponent,
    ThePaymentComponent,
    AddThePaymentComponent,
    MentorFrontComponent,
    MentorProfileComponent,
    UserdetailsComponent,
    UserpaymentComponent,
    MentordetailsComponent,
    Current1Component,
    Training1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path: 'mentor',component:MentorComponent},
    {path:'home',component:HomeComponent},
    { path: 'front',component:FrontComponent},
    { path: 'profile',component:ProfileComponent},
    { path: 'payments',component:PaymentsComponent},
    { path: 'current',component:CurrentComponent},
    { path: 'admin',component:AdminComponent},
    { path: 'admin2',component:AdminnComponent},
    {path:'mentorsignin',component:MentorSigninComponent},
    { path: 'technologies',component:TechnologyComponent},
    { path: 'technologys',component:AddTechnologyComponent},
    { path: 'skills',component:TechnologyComponent},
    { path: 'addskill',component:AddTechnologyComponent},
    { path: 'adduser',component:AddUserComponent},
    { path: 'user',component:UserComponent},
    { path: 'trainings',component:TrainingComponent},
    { path: 'addtraining',component:AddTrainingComponent},
    { path: 'thepayments',component:ThePaymentComponent},
    { path: 'addthepayment',component:AddThePaymentComponent},
    { path: 'mentorfront',component:MentorFrontComponent},
    { path: 'mentorprofile',component:MentorProfileComponent},
    { path: 'userpayment',component:UserpaymentComponent},
    { path: 'mentordetails', component: MentordetailsComponent},


    { path: 'addmentor',component:AddMentorComponent},
    { path: 'current1',component:Current1Component}
    ])
  ],
  providers: [UserService, SigninService,SignupService,MentorService,HomeService,FrontService,ProfileService,PaymentsService
  ,CurrentService,AdminService,AdminnService,MentorSigninService,TechnologyService,SkillService,TrainingService,ThePaymentService,
  MentorFrontService,MentorProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
