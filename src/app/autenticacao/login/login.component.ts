import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = 'https://bit.ly/3gbl1GD'
  
  icon1: any;

  icon2: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
