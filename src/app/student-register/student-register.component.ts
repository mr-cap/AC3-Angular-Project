import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit {
  studentname: any;
  dob: any;
  gender: any;
  parentname: any;
  edu: any;
  contact: any;
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
    studentname: new FormControl(''),
    parentname: new FormControl(''),
    dob: new FormControl('')
  });
  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal,
              config: NgbModalConfig,
              private router: Router,
              private toastr: ToastrService) {
  this.loginform = this.fb.group({
    studentname: ['', [Validators.required]],
    parentname: ['', [Validators.required]],
    dob: ['', Validators.required]
  });
  }
  get f(): any {
    return this.loginform.controls;
  }
  // tslint:disable-next-line: typedef
  registerUser(form: NgForm) {
  // console.log(form.value);
  this.data = form.value;
  this.studentname = this.data.studentname;
  this.dob = this.data.dob;
  this.gender = this.data.gender;
  this.parentname = this.data.pname;
  this.edu = this.data.edu;
  this.contact = this.data.contact;

  if (localStorage.getItem('students')){
    this.users = JSON.parse(localStorage.getItem('students'));
  }
  this.users.push(this.data);
  // console.log(this.data);
  localStorage.setItem('students', JSON.stringify(this.users));
  alert('Succesful');
}

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
        studentname: this.f.studentname.value,
        parentname: this.f.parentname.value,
        dob: this.f.dob.value
      };
      console.log(loginData);
      if (localStorage.getItem('students')){
        this.users = JSON.parse(localStorage.getItem('students'));
      }
      this.users.push(loginData);
      localStorage.setItem('students', JSON.stringify(this.users));
      this.activeModal.close('success');
    }, 1000);
  }
}
closeModel(): void {
  this.activeModal.close('cancelled');
}
}
