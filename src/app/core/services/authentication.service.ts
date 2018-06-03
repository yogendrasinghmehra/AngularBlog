import { Injectable } from '@angular/core';
import{Http,Headers,RequestOptions,Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';  
import 'rxjs/add/observable/throw';  
@Injectable()
export class AuthenticationService {  
   public token:string;
   public expireOn:string;

  constructor(private http:Http) {   
    //setting toekn if available in loacl storage
    var currentUser= JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser)
    {
      this.token=currentUser&&currentUser.token;
      this.expireOn=currentUser.expireOn;
    }
    
   }


   //setting headers for request.
  private headers=new Headers({'Content-Type':'application/json'});

   //login servvice...
   login(id:string,password:string):Observable<boolean>{  
 
  //setting body for request.
  let body=JSON.stringify({UserName:id,Password:password});
  
   //setting options
  let options=new RequestOptions({headers:this.headers});
  
  //calling service.
  return this.http.post('http://localhost:5000/api/token',body,options)
  .map((response:Response)=>{    
    let token=response.json() && response.json().token;
    let expireOn=response.json() && response.json().expireOn;
      if(token)
      {
        
        this.token=token;
        this.expireOn=expireOn;
        //setting the token to local storage...
        localStorage.setItem('currentUser',JSON.stringify({token:this.token,expireOn:this.expireOn}));
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

//logout service
     logout():void{      
     //clearing token and log out user
     this.token=null;
     this.expireOn=null;
     localStorage.removeItem('currentUser');
   }






}
