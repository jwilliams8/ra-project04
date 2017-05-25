import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../model/blog-post'

@Component({
  selector: 'app-home-adventure',
  templateUrl: './home-adventure.component.html',
  styleUrls: ['./home-adventure.component.css']
})
export class HomeAdventureComponent implements OnInit {

  journalArray = BlogPost.journalArray;

  constructor() {}

  ngOnInit() {
  }

}
