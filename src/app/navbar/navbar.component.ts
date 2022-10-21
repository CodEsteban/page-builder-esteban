import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isButtonClicked: boolean = false;
  toggle(): void {
    this.isButtonClicked = !this.isButtonClicked
    console.log("lol")
  }
  constructor() { 

  }

  ngOnInit(): void {
  }

}
