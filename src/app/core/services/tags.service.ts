import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable()
export class TagsService {
  public token:string;
  constructor(private _http:HttpClient) {
    var currentUser=JSON.parse(localStorage.getItem('currentUser'));
    this.token=currentUser&&currentUser.token;
   }

   //adding tag...
   addTags(model){ 
    
     const httpOptions={
       headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''})
     }
     let body=JSON.stringify(model);
     return this._http.post('http://localhost:5000/api/Tags',body,httpOptions);   
    
   }
// getting tag list...
   getTagList()
   {     
     const httpOptions={
       headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''})
     }
     return this._http.get('http://localhost:5000/api/Tags',httpOptions);
   }

   //remoing tag
   removeTag(tagId)
   {
     const httpOptions={
       headers:new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+this.token+''})
     }
     return this._http.delete('http://localhost:5000/api/Tags/'+tagId+'',httpOptions);

   }
   

}
