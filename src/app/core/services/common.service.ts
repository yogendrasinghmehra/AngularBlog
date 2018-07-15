import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
import { HtmlParser } from '@angular/compiler';
@Injectable()
export class CommonService {

  private token:string;
  //private httpOption:any;
  constructor(private http:HttpClient) { 
  
  var currentUser=JSON.parse(localStorage.getItem("currentUser"));
  this.token=currentUser&&currentUser.token;
  
  }
//save user query
saveUserQuery(queryModal)
{
  debugger
const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer'+this.token})  
}
let body=JSON.stringify(queryModal);
return this.http.post('http://localhost:5000/api/Query',body,httpOption);

}

//Get All User Queries
getUserQueries()
{

}



}
