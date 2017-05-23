import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeViewComponent }   from './view/home-view/home-view.component';
import { AdventureViewComponent }      from './view/adventure-view/adventure-view.component';
import { BlogListViewComponent }  from './view/blog-list-view/blog-list-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeViewComponent },
  { path: 'journal-list',     component: BlogListViewComponent},
  { path: 'adventure-post/:id', component: AdventureViewComponent},
  { path: 'adventure-post', component: AdventureViewComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}