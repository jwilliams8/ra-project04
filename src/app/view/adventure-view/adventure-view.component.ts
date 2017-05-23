import { BlogService } from '../../services/blog.service'
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { BlogPost } from '../../model/blog-post';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-adventure-view',
  templateUrl: './adventure-view.component.html',
  styleUrls: ['./adventure-view.component.scss']
})
export class AdventureViewComponent implements OnInit {

  constructor(private blogService: BlogService, private route: ActivatedRoute, private location: Location) { }
  
  storedId: number;
  storedJournal;
  journalArray = BlogPost.journalArray;  

  ngOnInit(): void {

  this.route.params
    .subscribe(params => this.storeTheId(params['id']));
  }

  storeTheId(id:number): any {
  	this.storedId = id;
  	console.log(this.storedId);
  	for (var x = 0; x < this.journalArray.length; x++){
  		if (this.storedId == this.journalArray[x].id) {
  			this.storedJournal = this.journalArray[x];
  		}
  	 }
  	 console.log(this.storedJournal);
  }

  submitForm(e: any){
  	console.log((e.target as HTMLButtonElement).parentElement);
  	const theForm = (e.target as HTMLButtonElement).parentElement;
  	const serializedForm = this.jsSerializeArray(theForm);
  	console.log(serializedForm);
  	const formData = JSON.stringify(serializedForm);
  	console.log(formData);
  	const dataParams = { 'params': formData };
  	const postThisJournal = this.blogService.putJournal(dataParams);
  }

  jsSerializeArray(form) {
  let field: any;
  let numberOfOptions = 0;
    const s: Array<any> = [];
  if (typeof form === 'object' && form.nodeName === 'FORM') {
    const len: number = form.elements.length;
    for (let i = 0; i < len; i++) {
      field = form.elements[i];
      const fieldName = field.name;
      const isFieldDisabled: Boolean = field.disabled;
      const fieldType = field.type;
      const fieldValue = field.value;
      if (fieldName && !isFieldDisabled && fieldType !== 'file' && fieldType !== 'reset' && fieldType !== 'submit' && fieldType !== 'button') {
        if (field.type === 'select-multiple') {
          let newField = '';
          numberOfOptions  = form.elements[i].options.length;
          const currentFormLength = s.length;
          for (let j = 0; j < numberOfOptions; j++) {
            if (field.options[j].selected) {
              // this has to be modified for correct submission the old code is below
              // s[s.length] = { name: field.name, value: field.options[j].value };
              // new value needs to be a comma separated list
              newField = newField + `${field.options[j].value},`;
              s[currentFormLength] = { name: field.name, value: newField };
            }
          }
          // strip the last comma
          s[currentFormLength].value = s[currentFormLength].value.toString().slice(0, -1);

        } else if ((fieldType !== 'checkbox' && fieldType !== 'radio') || field.checked) {
          s[s.length] = { name: fieldName, value: fieldValue };
        }
      }
    }
  }
  return s;
};

}
