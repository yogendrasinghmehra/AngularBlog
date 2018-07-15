import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import{TagsService} from '../../core/services/tags.service';
import{BlogService} from '../../core/services/blog.service';
import { Observable } from 'rxjs/Observable';
import { error } from 'util';

@Component({
  selector: 'add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit {
  blogForm:FormGroup;   
  public BlogList;
  public tagList;
  statusMessage:string;

  constructor(
    private FB:FormBuilder,
    private tagService:TagsService,
    private blogService:BlogService
  ) {
    this.createForm();   
    
   }
  ngOnInit() {
    this.getTagsList();
  }


    //create form
    createForm()
    {
      this.blogForm=this.FB.group({
        Title:['', Validators.compose([ Validators.required,Validators.maxLength(100)])],
        ShortHeading:['',Validators.compose([Validators.required,Validators.maxLength(500)])],
        Content:['',Validators.required],
        urlslug:['', Validators.compose([Validators.required,Validators.maxLength(100)]) ],
        TagsId:['',Validators.required],
  
      })
    }
    
  
  
     //get tag list
     getTagsList()
     {     
      return this.tagService.getTagList("all").subscribe(
        data=>{this.tagList=data});
         
     }

     //submitting forms
   onSubmit(){   
   if(this.blogForm.valid)
   {
      this.statusMessage="Adding Blog...";
      return this.blogService.addBlog(this.blogForm.value).subscribe(
      data=>{
        this.blogForm.reset();
        this.statusMessage="Blog Added Successfully.";       
       }
     ),
   error=>{this.statusMessage="Error Occured";}
  }
 }
}
