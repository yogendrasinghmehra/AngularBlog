import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MDBBootstrapModule} from 'angular-bootstrap-md';
import{ReactiveFormsModule} from '@angular/forms';
import{AdminDashboardComponent} from '../Admin/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from '../Admin/create-tag/create-tag.component';
import{BlogsComponent} from '../Admin/blogs/blogs.component';
import{EditBlogComponent} from '../Admin/edit-blog/edit-blog.component';
import{AddBlogComponent} from '../Admin/add-blog/add-blog.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TagsService } from '../core/services/tags.service';
import { BlogService } from '../core/services/blog.service';
import{Guard} from '../core/models/guard';
import { AuthenticationService } from '../core/services/authentication.service';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),       
    AdminRoutingModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),FroalaViewModule.forRoot()
  ],
  declarations: [AdminDashboardComponent,CreateTagComponent,BlogsComponent,EditBlogComponent,AddBlogComponent],
  providers: [AuthenticationService,Guard,TagsService,BlogService]
})
export class AdminModule { }
