import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../model/blog-post'

@Component({
  selector: 'app-blog-list-view',
  templateUrl: './blog-list-view.component.html',
  styleUrls: ['./blog-list-view.component.scss']
})
export class BlogListViewComponent implements OnInit {
  journalArray = BlogPost.journalArray;

  constructor() {}

  ngOnInit() {
  	console.log(this.journalArray);
  }

}
