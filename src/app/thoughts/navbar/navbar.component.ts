import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thoughts-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isButtonClicked: boolean = false;
  toggle(): void {
    this.isButtonClicked = !this.isButtonClicked
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
