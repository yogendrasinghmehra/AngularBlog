import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RoutingModule} from './routing.module';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import{SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { LoaderInterceptorService } from './core/interceptors/loader-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import{AlertModule} from 'ngx-alerts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [   
    RoutingModule,  
    BrowserModule,     
    BrowserAnimationsModule,
    HttpClientModule,
    AlertModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    SlimLoadingBarModule.forRoot()
  ],
  exports:[],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoaderInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }