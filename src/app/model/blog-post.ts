export class BlogPost {
	id:number = 0;
	title:string = "";
	content:string = "";
	categories:string= "";
	image:string = "";
	date: string = ""
	author:string = "";
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
			if (key !== 'count' || journal[key].title == 'title' ) {
			journal.id = journals[key].ID;
			journal.title = (journals[key].title.replace(/&#039;/g, `'`));
			console.log(journal.title);
			journal.content = (journals[key].content.replace(/&#039;/g, `'`));
			journal.categories = journals[key].categories;
			const blankImg = 'http://picolas.de/wp-content/uploads/2015/12/picolas-picture-not-available.jpg';
			const lowerCaseImg = journals[key].image.toString().toLowerCase();
			journal.image = (lowerCaseImg === 'false') ? blankImg : journals[key].image;
			journal.date = journals[key].date;
		    journal.author = journals[key].author;
			this.journalArray.push(journal)
		} 
		}
	}

}

