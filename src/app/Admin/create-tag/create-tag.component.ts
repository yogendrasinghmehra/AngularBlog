import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormBuilder} from "@angular/forms";
import{TagsService} from '../../core/services/tags.service';
import{TagModel} from '../../core/models/Tag.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.css']
})
export class CreateTagComponent implements OnInit {  
  tagForm:FormGroup;
  statusMessage:string="";
  public tagList;
  
  constructor(private tagService:TagsService,private _fb:FormBuilder) {
    this.createForm();
  }

  //creating form
  createForm()
  {
    this.tagForm=this._fb.group({
      Name:['',Validators.required]
    });
  }

//adding  tag
  onSubmit()
  {
    this.statusMessage="Adding Tag...";
    if(this.tagForm.valid)
    {     
      this.tagService.addTags(this.tagForm.value).subscribe(
        data=>{
          this.tagForm.reset();
          this.statusMessage="Tag Added Successfully";  
         // setTimeout(function(){this.statusMessage=""},3000);
          this.getTagsList();        
        },
        error=>{
          this.statusMessage="Something went wrong";
          return Observable.throw(error);
        }
      )
    }
   
  }

  //get tag list
  getTagsList()
  {
      this.tagService.getTagList("all").subscribe(
      data=>{this.tagList=data;}
    )
  }
  // removing tag
  removeTag(tagId)
{
  this.tagService.removeTag(tagId).subscribe(
  data=>{
    this.getTagsList();
    return true;
  }  
  )
   
}
  ngOnInit() {
   this.getTagsList();
   setTimeout(function(){this.statusMessage=""},3000);
  }

  

}