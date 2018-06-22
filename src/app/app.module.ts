import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RoutingModule} from './routing.module';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { LoaderInterceptorService } from './core/interceptors/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [   
    RoutingModule,  
    BrowserModule,     
    
    HttpClientModule,
    SlimLoadingBarModule.forRoot()
  ],
  exports:[],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
