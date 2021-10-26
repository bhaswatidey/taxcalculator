import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="";
  password="";

  constructor(private router:Router) {
    if(localStorage.getItem('loggedin')=='true'){
      this.router.navigate(['/dashboard'])
    }
   }

  ngOnInit(): void {
  }
  login(){
    //window.alert(this.password)
    //window.alert(this.username)
    if((this.username=="bhaswati")&&(this.password=="123")){
      window.alert("login successful")
      localStorage.setItem('loggedin','true')
      this.router.navigate(['/dashboard'])
    }else{
      this.router.navigate(['/login'])
    }
  }

}
