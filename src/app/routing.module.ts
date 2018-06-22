import { NgModule, Component } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
const appRoutes:Routes=[
{
  path: '',
  loadChildren: './Common/common.module#CommonsModule'
},
{
  path: 'admin',
  loadChildren: './Admin/admin.module#AdminModule'
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],

  declarations: []
})
export class RoutingModule { }
