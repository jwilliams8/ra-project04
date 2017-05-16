import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeShopComponent } from './view/home-view/home-shop/home-shop.component';
import { HomeJournalComponent } from './view/home-view/home-journal/home-journal.component';
import { HomeAdventureComponent } from './view/home-view/home-adventure/home-adventure.component';
import { FooterComponent } from './view/footer/footer.component';
import { HeaderComponent } from './view/home-view/header/header.component';
import { HomeViewComponent } from './view/home-view/home-view.component';
import { AdventureViewComponent } from './view/adventure-view/adventure-view.component';
import { BlogListViewComponent } from './view/blog-list-view/blog-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeShopComponent,
    HomeJournalComponent,
    HomeAdventureComponent,
    FooterComponent,
    HeaderComponent,
    HomeViewComponent,
    AdventureViewComponent,
    BlogListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
