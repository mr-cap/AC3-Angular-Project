import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ActivitiesComponent } from './activities/activities.component';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { VolunteerRegisterComponent } from './volunteer-register/volunteer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { InfoComponent } from './info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ActivitiesComponent,
    LoginComponent,
    StudentRegisterComponent,
    VolunteerRegisterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      // preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
