import { Component, OnInit } from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import{BlogService} from '../../core/services/blog.service';
import{NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {

  statusMessages:string;
  prevoiusPage:number;
  nextPage:number;
  tag?:string="";

  public BlogList:any;
  public list:any;
  constructor(private blogServices:BlogService,private router:Router,private route:ActivatedRoute,private spiner:NgxSpinnerService) {
    this.route.params.subscribe(param=>{        
      if(param['tagName'])
      {
        this.tag=param['tagName'];            
      }            
    })
   }

  ngOnInit() {                
      this.getBlogLists(1,this.tag); 
             
  }
// getting blog list.
  getBlogLists(pageNo?:number,tag?:string)
  {
    this.spiner.show();
    return this.blogServices.getBlogsList(pageNo,tag).subscribe(
      data=>{
        
        this.BlogList=data;         
        this.list=this.BlogList.list; 
        this.prevoiusPage=this.BlogList.prePage;
        this.nextPage=this.BlogList.nextPage;
        this.spiner.hide();      
      }
    ),
    error=>{this.statusMessages=error;  this.spiner.hide();}
  }



}
