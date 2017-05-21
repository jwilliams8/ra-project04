import { BlogPost } from './blog-post';

export class AllBlogPosts {

	blogPosts: BlogPost[];

	constructor(blogPosts: BlogPost[] = []) {

		this.blogPosts = blogPosts;

	}
	
}
