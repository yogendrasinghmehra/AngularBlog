import { Component, OnInit } from '@angular/core';
import{TagsService} from '../../core/services/tags.service';
@Component({
  selector: 'tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {

  public TagList;  
  constructor(private tagService:TagsService) { 
   // this.TagList;
  }

  ngOnInit() {
   this.GetTagsList();
  }

  GetTagsList()
  {
return this.tagService.getTagList().subscribe(
  data=>{    
    this.TagList=data;
  }
),
error=>{console.log(error);}
  }

}
