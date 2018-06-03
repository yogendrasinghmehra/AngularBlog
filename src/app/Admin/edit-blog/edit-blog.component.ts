import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import{ FormGroup, Validators, FormBuilder} from '@angular/forms';
import{TagsService} from '../../core/services/tags.service';
import{BlogService} from '../../core/services/blog.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';
@Component({
  selector: 'edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {

  EditBlogForm:FormGroup;
  BlogId:number;
  public tagList;
  statusMessage:string;
  
  constructor(
    private FB:FormBuilder,
    private tagService:TagsService,
    private blogService:BlogService,
    private route:ActivatedRoute,
    private router:Router
  ) {
    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
       this.BlogId=params['id'];
     });   
        
    //creating form
    this.EditBlogForm=this.FB.group({
      Id:['',Validators.required],
      Title:['',Validators.required],
      Content:['',Validators.required],
      urlslug:['',Validators.required],
      TagsId:['',Validators.required]
    })
   }

  ngOnInit() {
    this.getBlogDetails(); 

  }


  //get blog details by id
  getBlogDetails()
  {
      
        return this.blogService.getBlogById(this.BlogId).subscribe(
        data=>{this.assignForm(data)});        
  }
   //assign form
   assignForm(blog)
   {     
    // console.log(blog);    
     this.EditBlogForm=this.FB.group({
      Id:[blog.blogDetails.id,Validators.required],
       Title:[blog.blogDetails.title, Validators.compose([ Validators.required,Validators.maxLength(100)])],
       Content:[blog.blogDetails.content,Validators.required],
       urlslug:[blog.blogDetails.urlslug, Validators.compose([Validators.required,Validators.maxLength(100)]) ],
       TagsId:[blog.blogDetails.tagsId,Validators.required]
 
     })
     this.tagList=blog.tags ;
    
   }

   //submitting forms
   onSubmit(){   
    if(this.EditBlogForm.valid)
    {     
       this.statusMessage="Updating Blog...";
       return this.blogService.editBlog(this.EditBlogForm.value).subscribe(
       data=>{
        // this.EditBlogForm.reset();
       this.statusMessage="Blog Added Successfully.";    
       this.router.navigate(['/admin/blogs'])   
        }
      ),
    error=>{this.statusMessage="Error Occured";}
   }
  }
}
