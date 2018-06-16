import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import{BlogService} from '../../core/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
public blog:any;
public details:any;
pageId:any;
statusMessages:string;
urlSlug:string
  constructor(private blogServices:BlogService,private router:Router,private route:ActivatedRoute,) {

    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
       this.urlSlug=params['urlSlug'];
     });
     
   }

  ngOnInit() {
    this.getBlogDetails(this.urlSlug);  
  }

  // getting blog details by slug.
  getBlogDetails(slug:string)
  {    
    return this.blogServices.getBlogBySlug(slug).subscribe(
      data=>{        
        this.blog=data; 
        this.details=this.blog.blogDetails;                    
      }
    ),
    error=>{this.statusMessages=error;}
  }

}
