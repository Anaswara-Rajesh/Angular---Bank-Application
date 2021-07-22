import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
acno=""
pswd=""
uname="User name Please"

  constructor() { }

  ngOnInit(): void {
  }
  register(){
    alert("Register Clicked")
  }

}
