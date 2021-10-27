import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  users:any[]=[]
  name=""
  email=""
  number=""
  sex=""
  salary=""

  adduser=false
  disviewuser=false;
  res=0


  constructor(private router:Router,private api:ApiService) {

    if(localStorage.getItem('loggedin')!='true'){
      this.router.navigate(['/login'])
    }
    this.adduser=false;
    this.disviewuser=false;
   
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
    this.disviewuser=false;
    this.adduser=true;
  }
  getviewuser(){
    this.adduser=false
    this.disviewuser=true
    this.users=[]
    this.api.getviewuser().subscribe((data:any)=>{
      console.log(data)
      //var i=0;
      //for(i=0;i<data.length;i++){
        //this.users.push(data[i])
     // }
      data.forEach((element:any) => {
        this.users.push(element)        
     });
      
    })
  }
  getadduser(){
    
    this.api.getadduser(this.name,this.email,this.number,this.sex,this.salary).subscribe((data:any)=>{
      console.log(data)
      this.res=data.tax
    })
  }

}
