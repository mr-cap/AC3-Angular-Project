import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(500)
      ])
    ]),
    trigger('slideleft', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(-200px)'}),
        animate(500)
      ])
    ]),
    trigger('slideright', [
      transition('void => *', [
        style({opacity: 0, transform: 'translateX(200px)'}),
        animate(500)
      ])
    ])
  ],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
