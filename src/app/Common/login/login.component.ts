import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import{AuthenticationService} from '../../core/services/authentication.service';
import{Router} from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm=new FormGroup({
    id:new FormControl('',[Validators.required]), 
    password:new FormControl('',[Validators.required]),      
});
statusMessage:string="";

constructor(
  private authService:AuthenticationService,
  private router:Router
) { }
onSubmit()
{
  if(this.loginForm.valid)
  {   
    this.statusMessage="Checking ...";
    this.authService.login(this.loginForm.value.id,this.loginForm.value.password)
    .subscribe(response=>{
      if(response)
      {
       localStorage.setItem('currentUser',JSON.stringify({token:response.token,expireOn:response.expireOn}));
       this.router.navigate(['/admin'])
      }

    },err=>{this.statusMessage="something went wrong";})  
  }
}
  ngOnInit() {
    //reset login status...
    this.authService.logout();
  }

}
