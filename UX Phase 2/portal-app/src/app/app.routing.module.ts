import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import {AddMentorComponent} from './mentor/add-mentor.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './training/add-training.component';
import { ThePaymentComponent } from './thepayment/thepayment.component';
import { AddThePaymentComponent } from './thepayment/add-thepayment.component';
import { MentorFrontComponent } from './mentorfront/mentorfront.component';
import { MentorProfileComponent } from './mentorprofile/mentorprofile.component';
import { UserdetailsComponent} from './training/userdetails.component';
import { UserpaymentComponent} from './front/userpayment.component';
import { MentordetailsComponent} from './training/mentordetails.component';






import {AddUserComponent} from './user/add-user.component';
import { Current1Component } from './current/current1.component';
import { Training1Component } from './training/training1.component';


const routes: Routes = [
  { path: '',pathMatch:'full', component: HomeComponent },
  { path: 'user', component: UserComponent },

  { path: 'add', component: AddUserComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mentor', component: MentorComponent},
  { path: 'front', component: FrontComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'current', component: CurrentComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'adminn', component: AdminnComponent},
  { path: 'mentorsignin', component: MentorSigninComponent },
  { path: 'addtechnology', component: TechnologyComponent },
  { path: 'technologys', component: AddTechnologyComponent },
  { path: 'addskill', component: SkillComponent },
  { path: 'skills', component: AddSkillComponent },
  { path: 'addmentor', component: AddMentorComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'addtraining', component: AddTrainingComponent },
  { path: 'thepayments', component: ThePaymentComponent },
  { path: 'addthepayment', component: AddThePaymentComponent },
  { path: 'mentorfront', component: MentorFrontComponent },
  { path: 'mentorprofile', component: MentorProfileComponent},
  { path: 'userdetails', component: UserdetailsComponent},
  { path: 'userpayment', component: UserpaymentComponent},
  { path: 'mentordetails', component: MentordetailsComponent},
  { path: 'current1',component:Current1Component},
  { path: 'training1',component:Training1Component}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
