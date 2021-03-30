import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { VolunteerRegisterComponent } from '../volunteer-register/volunteer-register.component';
import { StudentRegisterComponent } from '../student-register/student-register.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userId: any;
  authUser = false;
  selected: any = 'home';
  loadingContent = false;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private auth: AuthService,
    private router: Router,
    private toastr: ToastrService) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  ngOnInit(): void {
    this.userId = this.auth.getAuthUserData();
    if (!this.userId) {
      this.router.navigate(['home']);
    }
    if (this.userId) {
      this.authUser = true;
    }
  }
  addClass(tab): void {
    this.selected = tab;
  }
  volregister(): void{
    const modal = this.modalService.open(VolunteerRegisterComponent, { scrollable: true, size: 'md', centered: true, windowClass: 'modal-holder' });
    modal.componentInstance.modalTitle = 'Volunteer Registeration';
    modal.result.then(data => {
      const req = data;
      if (req === 'success') {
        this.toastr.success('Your Registration is successfully....please Login ', 'Success');
        this.router.navigate(['home']);
        this.ngOnInit();
      }
    });
  }
  sturegister(): void{
    const modal = this.modalService.open(StudentRegisterComponent, { scrollable: true, size: 'lg', centered: true, windowClass: 'modal-holder' });
    modal.componentInstance.modalTitle = 'Student Registeration';
    modal.result.then(data => {
      const req = data;
      if (req === 'success') {
        this.toastr.success('Your Registration is successfully', 'Success');
        this.router.navigate(['home']);
        this.ngOnInit();
      }
    });
  }
  loginUser(): void {
    const modal = this.modalService.open(LoginComponent, { scrollable: true, size: 'md', centered: true, windowClass: 'modal-holder' });
    modal.componentInstance.modalTitle = 'Login User';
    modal.result.then(data => {
      const req = data;
      if (req === 'success') {
        this.toastr.success('You have successfully Logged in.', 'Success');
        this.router.navigate(['home']);
        this.ngOnInit();
      }
    });
  }
  logoutUser(): void {
    this.loadingContent = true;
    setTimeout(() => {
      this.loadingContent = false;
      this.auth.deleteAuthUserData();
      this.authUser = false;
      this.selected = 'home';
      this.ngOnInit();
      this.toastr.success('You have successfully Logged out.');
    }, 1000);
  }
}



