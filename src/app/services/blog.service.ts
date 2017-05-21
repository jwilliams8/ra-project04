import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BlogPost } from '../model/blog-post';
import { AllBlogPosts } from '../model/all-blog-posts'; 
import { AppComponent } from '../app.component'
import { BlogListViewComponent } from '../view/blog-list-view/blog-list-view.component'

@Injectable()
export class BlogService {

  	constructor (private http: Http) {}

    blogPostsUrl = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/';

    getBlogPosts(): Promise<BlogPost[]> {
    	let newPromise: any =  
    	this.http.get(this.blogPostsUrl).toPromise()
    	let resolvedPromise = Promise.resolve(newPromise.then(this.successFn).catch(this.failureFn));
    	return resolvedPromise;
   }

	failureFn (error) {
		console.log(error);
	}

    successFn (response) {
		let journals = response.json();
		console.log(journals);
		BlogPost.createArray(journals);
		console.log(BlogPost.journalArray)
	}  

  	handleError(error) {
    	console.log(error);
    }

}