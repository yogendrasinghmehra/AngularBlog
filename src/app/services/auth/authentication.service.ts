import { Injectable } from '@angular/core';
import{Http,Headers,RequestOptions,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
@Injectable()
export class AuthenticationService {  
   public token:string;

  constructor(private http:Http) {
    //setting toekn if available in loacl storage
    var currentUser= JSON.parse(localStorage.getItem('currentUser'));
    this.token=currentUser&& currentUser.token;
   }

   login(id:string,password:string):Observable<boolean>{  
     //setting body for request.
  let body=JSON.stringify({UserName:id,Password:password});
  //setting headers for request.
  let headers=new Headers({'Content-Type':'application/json'});
  //calling service.
  let options=new RequestOptions({headers:headers});
  return this.http.post('http://localhost:5000/api/token',body,options)
  .map((response:Response)=>{    
    let token=response.json() && response.json().token;
      if(token)
      {
        this.token=token;
      //setting the token to local storage...
        localStorage.setItem('currentUser',JSON.stringify({token:this.token}));
        return true;
      }
      else{
        return false;
      }
  })
  .catch(this.handleError);
}
handleError(error:Response){
console.error(error);
return Observable.throw(error);
}

     logout():void{
     //clearing token and log out user
     this.token=null;
     localStorage.removeItem('currentUser');
   }






}
