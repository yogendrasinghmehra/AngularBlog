import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm=new FormGroup({
    id:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])

});
onSubmit()
{
  if(this.loginForm.valid)
  {
    console.log(this.loginForm.value);
  }
  
}

  constructor() { }

  ngOnInit() {
  }

}
