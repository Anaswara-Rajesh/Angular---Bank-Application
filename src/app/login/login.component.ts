import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to SBL Bank"

  acno = "Account Number Please"
  pswd = ""

  users: any = {
    1000: { accno: 1000, username: "Aahit", password: "userone", balance: 5000 },
    1001: { accno: 1001, username: "Bahit", password: "usertwo", balance: 7000 },
    1002: { accno: 1002, username: "Cahit", password: "userthree", balance: 6000 },
    1003: { accno: 1003, username: "Dahit", password: "userfour", balance: 4000 }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login() {
   // console.log(a);
    
    var acno = this.acno;
    console.log(acno);
    
    var pswd = this.pswd;
    console.log(pswd);
    
    let accDetails = this.users;

    if (acno in accDetails) {

      if (pswd == accDetails[acno]["password"]) {
        alert("login succesfull")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("invalid password")
      }
    }
    else {
      alert("invalid Account number")
    }
  }

}
//   login() {
//     var acno = this.acno;
//     var pswd = this.pswd;
//     let accDetails = this.users;

//     if (acno in accDetails) {

//       if (pswd == accDetails[acno]["password"]) {
//         alert("login succesfull")
//       }
//       else {
//         alert("invalid password")
//       }
//     }
//     else {
//       alert("invalid Account number")
//     }
//   }

// }