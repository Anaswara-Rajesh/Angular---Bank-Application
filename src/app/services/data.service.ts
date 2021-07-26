import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: any = {
    1000: { accno: 1000, username: "Aahit", password: "userone", balance: 5000 },
    1001: { accno: 1001, username: "Bahit", password: "usertwo", balance: 7000 },
    1002: { accno: 1002, username: "Cahit", password: "userthree", balance: 6000 },
    1003: { accno: 1003, username: "Dahit", password: "userfour", balance: 4000 }
  }

  constructor() { }
  register(accno: any, username: any, password: any) {
    let accdetails = this.users
    if (accno in accdetails) {    
      return false;
    }
    else {
      accdetails[accno] = {
        accno,
        username,
        password,
        balance: 0
      }
      //console.log(accdetails);
      //console.log(this.users);  
      return true
    }
  }
  login(acno:any,pswd:any){
    let accdetails=this.users
    if(acno in accdetails){
      if(pswd == accdetails[acno]["password"]){
        return true
        
      }
      else{
        alert("invalid password")
        return false
      }
    }
      else{
        alert("invalid account number")   
        return false   
    }
  }
  deposit(acno:any,pswd:any,amount:any){
    let accdetails = this.users
    if(acno in accdetails){
      if(pswd == accdetails[acno]["password"]){
        accdetails[acno]["balance"]+=amount
        return accdetails[acno]["balance"]
      }
      else{
        alert("invalid password")
        return false
      }
    }
    else{
      alert("invalid account number")
      return false
    }
  }
}
