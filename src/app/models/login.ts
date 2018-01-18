import{FormGroup,FormControl} from '@angular/forms';

export class Login {
    loginForm=new FormGroup({
        id:new FormControl(),
        password:new FormControl()

    })
}
