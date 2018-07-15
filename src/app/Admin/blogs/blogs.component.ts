import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {TagsService} from '../../core/services/tags.service';
import {BlogService} from '../../core/services/blog.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';
@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  editBlogForm:FormGroup;  
   BlogList:any={};
  public tagList;
  pageNo?:number=1;
  tag?:string="";
  statusMessage:string;

  constructor(
    private FB:FormBuilder,
    private tagService:TagsService,
    private blogService:BlogService
  ) {
   
    this.editForm();     
    this.BlogList;
    this.tagList;
   }


   ngOnInit() {
      this.getBlogs();
      this.getTagsList();
      
     
  }

   // edit form
  editForm()
  {
    this.editBlogForm=this.FB.group({
      Title:['',Validators.required],
      Content:['',Validators.required],
      urlslug:['',Validators.required],
      TagsId:['',Validators.required],

    });
  }


   // get tag list
   getTagsList()
   {     
    return this.tagService.getTagList(null).subscribe(
      data=>{this.tagList=data});
       
   }
   getBlogs()
   {     
     return this.blogService.getBlogsList(this.pageNo,this.tag).subscribe(
       data=>{                 
         this.BlogList=data;         
        }),
       error=>{console.log(error);}


   }



   
}
