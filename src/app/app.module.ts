import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import{RoutingModule} from './routing.module';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MDBBootstrapModule} from 'angular-bootstrap-md';
import{DisqusModule} from 'ngx-disqus';
import{NgxSpinnerModule} from 'ngx-spinner';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { LoginComponent } from './shared/login/login.component';
import { HomeComponent } from './shared/home/home.component';
import{Guard} from './core/models/guard';
import { AuthenticationService } from './core/services/authentication.service';
import { BlogsListComponent } from './Common/blogs-list/blogs-list.component';
import { BlogDetailComponent } from './Common/blog-detail/blog-detail.component';
import { TagsListComponent } from './Common/tags-list/tags-list.component';
import{AdminDashboardComponent} from './Admin/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from './Admin/create-tag/create-tag.component';
import{BlogsComponent} from './Admin/blogs/blogs.component';
import{EditBlogComponent} from './Admin/edit-blog/edit-blog.component';
import{AddBlogComponent} from './Admin/add-blog/add-blog.component';
import { TagsService } from './core/services/tags.service';
import { BlogService } from './core/services/blog.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,LoginComponent,HomeComponent,BlogsListComponent,BlogDetailComponent,TagsListComponent,
    AdminDashboardComponent,CreateTagComponent,BlogsComponent,EditBlogComponent,AddBlogComponent       
  ],
  imports: [   
    RoutingModule, 
    BrowserModule,
    NgbModule.forRoot(),       
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()    ,
    DisqusModule.forRoot('localhost-4200-11'),
    NgxSpinnerModule,
    FroalaEditorModule.forRoot(),FroalaViewModule.forRoot()
  ],
  exports:[],
  providers: [AuthenticationService,Guard,TagsService,BlogService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
