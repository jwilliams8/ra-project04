import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../../model/blog-post'


@Component({
  selector: 'app-home-journal',
  templateUrl: './home-journal.component.html',
  styleUrls: ['./home-journal.component.css']
})
export class HomeJournalComponent implements OnInit {

  journalArray = BlogPost.journalArray;

  constructor() { }

  ngOnInit() {
  }

}
