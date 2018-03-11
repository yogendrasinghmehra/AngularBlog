import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import{TagsService} from '../../services/Tag/tags.service';
import{BlogService} from '../../services/blog/blog.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';
@Component({
  selector: 'blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogForm:FormGroup; 
  editBlogForm:FormGroup;
  public BlogList;
  public tagList;
  statusMessage:string;

  constructor(
    private FB:FormBuilder,
    private tagService:TagsService,
    private blogService:BlogService
  ) {
    this.createForm();   
    this.editForm(); 
   }


   ngOnInit() {
      this.getBlogs();
      this.getTagsList();
      
     
  }

  
  //creating forms
  //create form
  createForm()
  {
    this.blogForm=this.FB.group({
      Title:['',Validators.required],
      Content:['',Validators.required],
      urlslug:['',Validators.required],
      TagsId:['',Validators.required],

    })
  }
  //edit form
  editForm()
  {
    this.editBlogForm=this.FB.group({
      Title:['',Validators.required],
      Content:['',Validators.required],
      urlslug:['',Validators.required],
      TagsId:['',Validators.required],

    });
  }


   //get tag list
   getTagsList()
   {     
    return this.tagService.getTagList().subscribe(
      data=>{this.tagList=data});
       
   }
   getBlogs()
   {
     return this.blogService.getBlogsList().subscribe(
       data=>{
         this.BlogList=data;          
        }),
       error=>{console.log(error);}


   }



   //submitting forms
   onSubmit(){
     debugger;
    if(this.blogForm.valid)
    {
       this.statusMessage="Adding Blog...";
       return this.blogService.addBlog(this.blogForm.value).subscribe(
       data=>{
         this.blogForm.reset();
         this.statusMessage="Blog Added Successfully.";
         this.getBlogs();
        }
      ),
    error=>{this.statusMessage="Error Occured";}
   }
  }

  //editing foms
  onEdit(id)
  {
    //console.log(id);
    return this.blogService.getBlogById(id).subscribe(data=>
    {console.log(data);})
  }
  onSubmitEdit()
  {
    console.log(this.editBlogForm.value);
  }
}
