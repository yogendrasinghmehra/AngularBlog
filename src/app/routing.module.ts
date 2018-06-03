import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{LoginComponent} from './shared/login/login.component';
import{NavMenuComponent} from './shared/nav-menu/nav-menu.component';
import{HomeComponent} from './shared/home/home.component';
import {BlogsListComponent } from './Common/blogs-list/blogs-list.component';
import {BlogDetailComponent} from './Common/blog-detail/blog-detail.component';
import{TagsListComponent} from './Common/tags-list/tags-list.component';
import{AdminDashboardComponent} from './Admin/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from './Admin/create-tag/create-tag.component';
import{BlogsComponent} from './Admin/blogs/blogs.component';
import{EditBlogComponent} from './Admin/edit-blog/edit-blog.component';
import{AddBlogComponent} from './Admin/add-blog/add-blog.component';
import{RouterModule,Routes,PreloadAllModules, PreloadingStrategy} from '@angular/router';
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
},

{
  path:"admin/add-blog",
  component:AddBlogComponent,
  canActivate:[Guard]
},
{
  path:"admin/edit-blog/:id",
  component:EditBlogComponent,
  canActivate:[Guard]
}
]



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,{preloadingStrategy:PreloadAllModules}
    )
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class RoutingModule { }
