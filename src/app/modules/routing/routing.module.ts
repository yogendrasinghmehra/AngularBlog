import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LoginComponent} from '../../components/login/login.component';
import{NavMenuComponent} from '../../components/nav-menu/nav-menu.component';
import{HomeComponent} from '../../components/home/home.component';
import{AdminDashboardComponent} from '../../components/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from '../../components/Tags/create-tag/create-tag.component';
import{BlogsComponent} from '../../components/blogs/blogs.component';
import{RouterModule,Routes} from '@angular/router';
import{AppComponent} from '../../app.component';
import { Route } from '@angular/router/src/config';
import{Guard} from '../../models/guard';

const appRoutes:Routes=[
{
  path:"Login",
  component:LoginComponent
},
{
  path:"",
  component:HomeComponent
},
{
  path:"admin",
  component:AdminDashboardComponent,
  canActivate:[Guard]
},
{
  path:"admin/tags",
  component:CreateTagComponent,
  canActivate:[Guard]
},
{
  path:"admin/blogs",
  component:BlogsComponent,
  canActivate:[Guard]
}
]



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
