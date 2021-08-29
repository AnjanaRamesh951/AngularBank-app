import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Welcome to SBL Bank"
  acNumber="Account Number Please"
  acno=""
  pswd=""
  users:any={
    1000:{acno:1000,username:"Adhi",password:"userone",balace:5000},
    1001:{acno:1001,username:"Druv",password:"usertwo",balace:6000},
    1002:{acno:1002,username:"Vish",password:"userthree",balace:7000},
    1003:{acno:1003,username:"Shiv",password:"userfour",balace:8000}

  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  login(){
    //;console.log(a);
    
    var acno=this.acno;
    console.log(acno);
    
    var pswd=this.pswd;
    console.log(pswd);
    
    let accDetails=this.users
    if(acno in accDetails){
      if(pswd==accDetails[acno]["password"]){
        alert("Login Successfully")
        this.router.navigateByUrl("dashboard")
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("invalid Account number")
    }
    
  }
  

}

