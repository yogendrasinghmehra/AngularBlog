import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MDBBootstrapModule} from 'angular-bootstrap-md';
import{DisqusModule} from 'ngx-disqus';
import{LoginComponent} from '../Common/login/login.component';
import{NavMenuComponent} from '../shared/nav-menu/nav-menu.component';
import{HomeComponent} from '../Common/home/home.component';
import {BlogsListComponent } from '../Common/blogs-list/blogs-list.component';
import {BlogDetailComponent} from '../Common/blog-detail/blog-detail.component';
import{TagsListComponent} from '../shared/tags-list/tags-list.component';
import{ResumeComponent} from '../Common/resume/resume.component';
import { CommonRoutingModule } from './common-routing.module';
import { AuthenticationService } from '../core/services/authentication.service';
import { TagsService } from '../core/services/tags.service';
import { BlogService } from '../core/services/blog.service';

@NgModule({
  imports: [
    CommonModule,
    CommonRoutingModule,ReactiveFormsModule,
    NgbModule.forRoot(),MDBBootstrapModule.forRoot(),DisqusModule.forRoot('localhost-4200-11'),
  ],
  declarations: [LoginComponent,NavMenuComponent,HomeComponent,BlogsListComponent,BlogDetailComponent,
    TagsListComponent,ResumeComponent],
    providers:[TagsService,BlogService,AuthenticationService]
})
export class CommonsModule { }
