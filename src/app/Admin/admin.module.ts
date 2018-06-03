import { NgModule,NO_ERRORS_SCHEMA } from "@angular/core";
import{CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { CreateTagComponent } from './create-tag/create-tag.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TagsService } from '../core/services/tags.service';
import { BlogService } from '../core/services/blog.service';
import { AdminRoutingModule } from '../Admin/admin.routing';
@NgModule({
declarations:[AdminDashboardComponent,EditBlogComponent,AddBlogComponent,CreateTagComponent,BlogsComponent],
imports:[CommonModule,AdminRoutingModule],
providers:[TagsService, BlogService],
schemas:[NO_ERRORS_SCHEMA]


})

export class AdminModule{}