import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivitiesComponent } from './activities/activities.component';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { VolunteerRegisterComponent } from './volunteer-register/volunteer-register.component';
import { InfoComponent } from './info/info.component';
const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'activities', component: ActivitiesComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'student-register', component: StudentRegisterComponent,
  },
  {
    path: 'volunteer-register', component: VolunteerRegisterComponent,
  },
  {
    path: 'info', component: InfoComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
