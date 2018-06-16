import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RoutingModule} from './routing.module';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import{MDBBootstrapModule} from 'angular-bootstrap-md';
import{DisqusModule} from 'ngx-disqus';
import{SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { LoginComponent } from './Common/login/login.component';
import { HomeComponent } from './Common/home/home.component';
import{Guard} from './core/models/guard';
import { AuthenticationService } from './core/services/authentication.service';
import { BlogsListComponent } from './Common/blogs-list/blogs-list.component';
import { BlogDetailComponent } from './Common/blog-detail/blog-detail.component';
import { TagsListComponent } from './shared/tags-list/tags-list.component';
import { TagsService } from './core/services/tags.service';
import { BlogService } from './core/services/blog.service';
import { LoaderInterceptorService } from './core/interceptors/loader-interceptor.service';
import { ResumeComponent } from './Common/resume/resume.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,LoginComponent,HomeComponent,BlogsListComponent,BlogDetailComponent,TagsListComponent, ResumeComponent
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
    SlimLoadingBarModule.forRoot()
  ],
  exports:[],
  providers: [AuthenticationService,Guard,TagsService,BlogService,{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
