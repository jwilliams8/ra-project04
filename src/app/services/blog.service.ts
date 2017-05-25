import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BlogPost } from '../model/blog-post';
import { AllBlogPosts } from '../model/all-blog-posts'; 
import { AppComponent } from '../app.component'
import { BlogListViewComponent } from '../view/blog-list-view/blog-list-view.component'
import { AdventureViewComponent } from '../view/adventure-view/adventure-view.component'

@Injectable()
export class BlogService {

  	constructor (private http: Http) {}

    blogGetPostsUrl = 'http://portal.helloitscody.com/inhabitent/api/get/94a08da1fecbb6e8b46990538c7b50b2/';

    getBlogPosts(): Promise<BlogPost[]> {
    	let newPromise: any =  
    	this.http.get(this.blogGetPostsUrl).toPromise()
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

 	formModal() {
 		document.getElementsByClassName('form-modal-hide')[0].setAttribute("id", "form-modal-show");
		document.getElementsByTagName("body")[0].setAttribute("class", "overflow-hidden") 
		setTimeout(function(){ 
	    document.forms["apiForm"].reset();
		document.getElementsByClassName('form-modal-hide')[0].removeAttribute("id");
		document.getElementsByTagName("body")[0].removeAttribute("class");
		}, 3000)   
    }

    putJournal(dataParams){
    	console.log(dataParams);
    	let newData;
    	for (var key in dataParams){
    		newData = dataParams[key];
    	}
    	console.log(newData);
    	let postUrl = 'http://portal.helloitscody.com/inhabitent/api/post/94a08da1fecbb6e8b46990538c7b50b2?params=' + newData;
    	this.formModal();
        return this.http
        .post(postUrl, Option).toPromise()
    	.then(res => res.json().data)
    	.catch(this.handleError);
    }

    getJournal(id: number): Promise<BlogPost> {
  		return this.getBlogPosts()
        .then(blogPost => blogPost.find(journal => journal.id === id));
	}
}