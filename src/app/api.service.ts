import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

 getviewuser(){
   return this.http.get("https://jsonplaceholder.typicode.com/users")
 }
 getadduser(name:string,email:string,phone:string,sex:string,salary:string){
   return this.http.post("http://localhost:3002/adduser",{'name':name,'email':email,'phone':phone,'sex':sex,'salary':salary})
 }
}
