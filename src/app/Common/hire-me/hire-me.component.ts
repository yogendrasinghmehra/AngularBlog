import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import{CommonService} from '../../core/services/common.service';
import{AlertService} from 'ngx-alerts';
@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.scss']
})
export class HireMeComponent implements OnInit {
  hireMe: FormGroup;
  constructor(public fb: FormBuilder,private commonService:CommonService,private AlertService:AlertService) { 
    this.hireMe = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
     queryDetails: ['', Validators.required]      
    });
  }

  onSubmit()
{
  if(this.hireMe.valid)
  {   
    debugger;
//  console.log(this.hireMe);
this.commonService.saveUserQuery(this.hireMe.value).subscribe(
  data=>{
    this.hireMe.reset();
    this.AlertService.success('Your Query Submitted Successfully.');
  }
),
error=>{this.AlertService.danger('something went wrong !');}




    // this.statusMessage="Checking ...";
    // this.authService.login(this.loginForm.value.id,this.loginForm.value.password)
    // .subscribe(response=>{
    //   if(response)
    //   {
    //    localStorage.setItem('currentUser',JSON.stringify({token:response.token,expireOn:response.expireOn}));
    //    this.router.navigate(['/admin'])
    //   }

    // },err=>{this.statusMessage="something went wrong";})  
  }
}

  ngOnInit() {
  }

}
