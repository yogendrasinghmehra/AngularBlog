import { NgModule, Component } from '@angular/core';
import{LoginComponent} from './shared/login/login.component';
import{NavMenuComponent} from './shared/nav-menu/nav-menu.component';
import{HomeComponent} from './shared/home/home.component';
import {BlogsListComponent } from './Common/blogs-list/blogs-list.component';
import {BlogDetailComponent} from './Common/blog-detail/blog-detail.component';
import{TagsListComponent} from './Common/tags-list/tags-list.component'
import{RouterModule,Routes} from '@angular/router';
import{AppComponent} from './app.component';
import{Guard} from './core/models/guard';
const appRoutes:Routes=[
{
  path:"Login",
  component:LoginComponent
},
{
  path:"",
  component:HomeComponent,
  pathMatch:"full"
},
{
  path:"blogs",
  component:BlogsListComponent,
  pathMatch:"full"
},
{
  path:"blog/:urlSlug",
  component:BlogDetailComponent,
  pathMatch:"full"
},

{
path:"blogs/tag/:tagName",
component:BlogsListComponent,
pathMatch:"full"
},
{
  path: 'admin',
  loadChildren: './Admin/admin.module#AdminModule'
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class RoutingModule { }
