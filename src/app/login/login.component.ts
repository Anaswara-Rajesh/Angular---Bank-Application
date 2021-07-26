import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome to SBL Bank"

  acno = "Account Number Please"
  pswd = ""

  
  constructor(private router:Router,private ds: DataService) { }

  ngOnInit(): void {
  }
  
  login() {
   // console.log(a);
    
    var acno = this.acno;
   // console.log(acno);
    
    var pswd = this.pswd;
    //console.log(pswd);
    
    var result=this.ds.login(acno,pswd)
    if(result){
      alert("login successfully")
      this.router.navigateByUrl("dashboard")
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