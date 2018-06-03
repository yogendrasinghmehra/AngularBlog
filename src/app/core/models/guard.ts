import{ Injectable} from '@angular/core';
import{Router,CanActivate} from '@angular/router';
import { parse } from 'url';


@Injectable()
export class Guard implements CanActivate {
    constructor(private router:Router){}
    canActivate(){
        
        if(localStorage.getItem('currentUser')){                
            var dd= JSON.parse(localStorage.getItem('currentUser'));                       
            if( dd && new Date(dd.expireOn)>new Date())
            {
                return true;
            }
            else
            {
                this.router.navigate(['/Login']);
                return false;
            }
            
        }
        this.router.navigate(['/Login']);
        return false;
    }
}
