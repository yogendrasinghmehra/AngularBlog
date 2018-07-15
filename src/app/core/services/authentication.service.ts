import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders } from '@angular/common/http';
import{Observable} from 'rxjs/Observable';
@Injectable()
export class AuthenticationService {  
  constructor(private httpClient:HttpClient) {   
    
  }
   //setting headers for request.
  private headers=new Headers({'Content-Type':'application/json'});
  
  //login service...
  login(id:string,password:string):Observable<AuthToken>{      
    //setting body for request.
    let body=JSON.stringify({UserName:id,Password:password});
      
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };    
    //calling service.
   return  this.httpClient.post<AuthToken>('http://localhost:5000/api/token',body,httpOptions);
   
  }
handleError(error:Response){
console.error(error);
return Observable.throw(error);
}

//logout service
     logout():void{         
     //clearing token and log out user    
     localStorage.removeItem('currentUser');
   }
}

export interface AuthToken{
  token:string;
  expireOn:string

}
