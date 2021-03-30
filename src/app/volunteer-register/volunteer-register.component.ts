import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-volunteer-register',
  templateUrl: './volunteer-register.component.html',
  styleUrls: ['./volunteer-register.component.scss']
})
export class VolunteerRegisterComponent implements OnInit {
  data: any;
  username: '' ;
  stringifiedData: any;
  parsedJson: any;
  httpService: any;
  users = [];
  email: '';
  password: '';
  signupForm: any;
  modalTitle: string;
  loadingContent = false;
  loginform = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal,
              config: NgbModalConfig,
              private auth: AuthService,
              private router: Router,
              private toastr: ToastrService) {
  this.loginform = this.fb.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    password: ['', Validators.required]
  });
  }
  get f(): any {
    return this.loginform.controls;
  }
//   registerUser(form: NgForm) {
//   // console.log(form.value);
//   this.data = form.value;
//   this.username = this.data.username;
//   this.email = this.data.email;
//   this.password = this.data.password;
//   if (localStorage.getItem('users')){
//     this.users = JSON.parse(localStorage.getItem('users'));
//   }
//   this.users.push(this.data);
//   // console.log(this.data);
//   localStorage.setItem('users', JSON.stringify(this.users));
//   alert('Succesful');
//   this.router.navigate(['home']);
//   // const user = JSON.parse(localStorage.getItem('added-user'));
//   // console.log('retrievedObject: ', user);
//   // ... <-- now use JSON.stringify() to convert form values to json.
// }

ngOnInit() {

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      const validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
}
onSubmit(): void {
  if (this.loginform.valid) {
    this.loadingContent = true;
    setTimeout(() => {
      this.loadingContent = false;
      const loginData = {
        email: this.f.email.value,
        username: this.f.username.value,
        password: this.f.password.value
      };
      console.log(loginData);
      if (localStorage.getItem('users')){
        this.users = JSON.parse(localStorage.getItem('users'));
      }
      this.users.push(loginData);
      localStorage.setItem('users', JSON.stringify(this.users));
      this.activeModal.close('success');
    }, 1000);
  }
}
closeModel(): void {
  this.activeModal.close('cancelled');
}
}

