import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name=""
  email=""
  number=""
  sex=""
  salary=""

  adduser=true
  res=0


  constructor(private router:Router,private api:ApiService) {

    if(localStorage.getItem('loggedin')!='true'){
      this.router.navigate(['/login'])
    }
    this.adduser=false
   
  }

  ngOnInit(): void {
  }
  view(){

  }

  calculate(){

  }
  logout(){
    localStorage.removeItem('loggedin')
    this.router.navigate(['/login'])
  }
  //viewuserfunc(){
    //this.adduser=false;
  //}
  adduserfunc(){
    this.adduser=true;
  }
  getviewuser(){
    this.adduser=false
    this.api.getviewuser().subscribe((data:any)=>{
      console.log(data)
    })
  }
  getadduser(){
    this.api.getadduser(this.name,this.email,this.number,this.sex,this.salary).subscribe((data:any)=>{
      console.log(data)
      this.res=data.tax
    })
  }

}
