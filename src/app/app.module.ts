import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RoutingModule} from './modules/routing/routing.module';
import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import{HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import{Guard} from './models/guard';
import { AuthenticationService } from './services/auth/authentication.service';
import { CreateTagComponent } from './components/Tags/create-tag/create-tag.component';
import { TagsService } from './services/Tag/tags.service';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    CreateTagComponent          
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(),FroalaEditorModule.forRoot(),FroalaViewModule.forRoot(), RoutingModule,
    ReactiveFormsModule,HttpModule,HttpClientModule
  ],
  exports:[],
  providers: [AuthenticationService,Guard, TagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
