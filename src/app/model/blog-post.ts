import { HomeAdventureComponent } from '../view/home-view/home-adventure/home-adventure.component';
import { IBlog } from './iblog';

export class BlogPost {
	id:number;
	title:string;
	content:string;
	categories:string;
	image:string;
	date: string;
	author:string;
	static journalArray = [];

	constructor(id: number = 0, title:string = "", content:string = "", categories:string = "", image:string = "", date:string = "", author:string = ""){
		this.id = id;
		this.title = title;
		this.content = content;
		this.categories = categories;
		this.image = image;
		this.date = date;
		this.author = author;
	}

	static createArray(journals){
		for (var key in journals){
			let journal = new BlogPost;
			if (key !== 'count') {
			journal.id = journals[key].ID;
			journal.title = (journals[key].title.replace(/&#039;/g, `'`).replace(/&#8230;/g, `...`));
			journal.content = (journals[key].content.replace(/&#039;/g, `'`));
			journal.categories = journals[key].categories;
			const blankImg = 'http://www.tourniagara.com/wp-content/uploads/2014/10/default-img.gif';
			const lowerCaseImg = journals[key].image.toString().toLowerCase();
			journal.image = (lowerCaseImg === 'false') ? blankImg : journals[key].image;
			journal.date = journals[key].date;
		    journal.author = journals[key].author;
			this.journalArray.push(journal)
			} 
		}
	}
}

