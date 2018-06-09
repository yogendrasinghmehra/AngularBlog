import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminDashboardComponent} from '../Admin/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from '../Admin/create-tag/create-tag.component';
import{BlogsComponent} from '../Admin/blogs/blogs.component';
import{EditBlogComponent} from '../Admin/edit-blog/edit-blog.component';
import{AddBlogComponent} from '../Admin/add-blog/add-blog.component';
import{Guard} from '../core/models/guard';
const routes: Routes = [
  {
  path:"",
  component:AdminDashboardComponent,
  canActivate:[Guard]
},
{
  path:"tags",
  component:CreateTagComponent,
  canActivate:[Guard]
},
{
  path:"blogs",
  component:BlogsComponent,
  canActivate:[Guard]
},

{
  path:"add-blog",
  component:AddBlogComponent,
  canActivate:[Guard]
},
{
  path:"edit-blog/:id",
  component:EditBlogComponent,
  canActivate:[Guard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
