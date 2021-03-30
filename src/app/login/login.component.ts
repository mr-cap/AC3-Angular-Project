import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  modalTitle: string;
  loadingContent = false;
  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  usersDB: any[] = [];
  constructor(private fb: FormBuilder, private activeModal: NgbActiveModal, private auth: AuthService,
              private toastr: ToastrService, private router: Router) {
    this.loginform = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  get f(): any {
    return this.loginform.controls;
  }

  ngOnInit(): void {
    this.usersDB = JSON.parse(localStorage.getItem('users'));
    console.log(this.usersDB);
  }
  onSubmit(): void {
    if (this.loginform.valid) {
      this.loadingContent = true;
      setTimeout(() => {
        this.loadingContent = false;
        const loginData = {
          username: this.f.username.value,
          password: this.f.password.value
        };
        let flag = 0;
        const db = this.usersDB;
        for (const u of db) {
          if (u.username === loginData.username && u.password === loginData.password) {
            const userId = u.username;
            this.auth.setAuthUserData(userId);
            this.activeModal.close('success');
            break;
          }else{
            flag++;
          }
        }
        if (flag >= db.length){
          this.toastr.error('User not found.');
          console.log('user not found.');
        }
      }, 1000);
    }
  }
  closeModel(): void {
    this.activeModal.close('cancelled');
  }
}
