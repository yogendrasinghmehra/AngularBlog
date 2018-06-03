import { NgModule} from '@angular/core';
import{AdminDashboardComponent} from '../Admin/admin-dashboard/admin-dashboard.component';
import{CreateTagComponent} from '../Admin/create-tag/create-tag.component';
import{BlogsComponent} from '../Admin/blogs/blogs.component';
import{EditBlogComponent} from '../Admin/edit-blog/edit-blog.component';
import{AddBlogComponent} from '../Admin/add-blog/add-blog.component';
import{TagsListComponent} from '../Common/tags-list/tags-list.component';
import{RouterModule,Routes} from '@angular/router';
import{Guard} from '../core/models/guard';


const adminRoutes:Routes=[

{
  path:"admin",
  component:AdminDashboardComponent,
  canActivate:[Guard]
},
{
  path:"admin/tags",
  component:CreateTagComponent,
  canActivate:[Guard]
},
{
  path:"admin/blogs",
  component:BlogsComponent,
  canActivate:[Guard]
},

{
  path:"admin/add-blog",
  component:AddBlogComponent,
  canActivate:[Guard]
},
{
  path:"admin/edit-blog/:id",
  component:EditBlogComponent,
  canActivate:[Guard]
}
]
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]

  
})
export class AdminRoutingModule { }
