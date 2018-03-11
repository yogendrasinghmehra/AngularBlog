import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders}from '@angular/common/http'

@Injectable()
export class BlogService {

  public token:string;
  constructor(private _http:HttpClient) {
      var currentUser=JSON.parse(localStorage.getItem("currentUser"));
      this.token=currentUser&&currentUser.token;
   }

   //adding blog
   addBlog(model)
   {     
    const httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''}) 
   }
   let body=JSON.stringify(model);
   return this._http.post('http://localhost:5000/api/Blog',body,httpOptions);
  }
//getting blog list.
  getBlogsList()
  {
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''})
    }
    return this._http.get('http://localhost:5000/api/Blog',httpOptions);
  }

  //get blog by id
  getBlogById(id)
  {
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''})
    }
    return this._http.get('http://localhost:5000/api/Blog/'+id+'',httpOptions);
  }




}
