import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from '../Common/login/login.component';
import{HomeComponent} from '../Common/home/home.component';
import {BlogsListComponent } from '../Common/blogs-list/blogs-list.component';
import {BlogDetailComponent} from '../Common/blog-detail/blog-detail.component';
import{ResumeComponent} from '../Common/resume/resume.component';

const routes: Routes = [
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
    path:"resume",
    component:ResumeComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
