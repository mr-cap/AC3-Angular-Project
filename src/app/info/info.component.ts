import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  users = [];
  students = [];
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.students = JSON.parse(localStorage.getItem('students'));
  }

}
