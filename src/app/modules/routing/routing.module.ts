import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LoginComponent} from '../../components/login/login.component';
import{NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import{HomeComponent} from '../../components/home/home.component';
import{RouterModule,Routes} from '@angular/router';
import{AppComponent} from '../../app.component';
import { Route } from '@angular/router/src/config';

const appRoutes:Routes=[
{
  path:"Login",
  component:LoginComponent
},
{
  path:"",
  component:HomeComponent
}]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class RoutingModule { }
