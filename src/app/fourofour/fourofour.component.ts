import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourofour',
  templateUrl: './fourofour.component.html',
  styleUrls: ['./fourofour.component.css']
})
export class FourofourComponent implements OnInit {

  constructor() { }
  bgColors = [
    "#FF9AA2",
    "#FFB7B2",
    "#FFDAC1",
    "#E2F0CB",
    "#B5EAD7",
    "#C7CEEA",
  ]

  fgColors = [
    "#945054",
    "#9f625f",
    "#8d664f",
    "#6d8352",
    "#53826f",
    "#495380",
  ]
  bgColor = "#ffffff" 
  fgColor = "#ffffff" 
  ngOnInit(): void {
    let randomIndex = Math.floor(Math.random() * 6)
    this.bgColor = this.bgColors[randomIndex]
    this.fgColor = this.fgColors[randomIndex]
  }

}
