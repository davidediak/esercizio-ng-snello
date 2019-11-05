import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import { AuthorsService } from '../services/authors.service';
import {AbstractEditComponent} from '../abstract/abstract-edit-component.component';

@Component({
  selector: 'app-admin-authors-add',
  templateUrl: './admin-authors-add.component.html',
  styleUrls: ['./admin-authors-add.component.css']
})
export class AdminAuthorsAddComponent extends AbstractEditComponent<Author> implements OnInit {

  author: Author = new Author();

  constructor(private authorService: AuthorsService) {
    super(authorService);
   }

  ngOnInit() {
    console.log(this.author);
  }

  addAuthor() {
    this.post(this.author);
    this.goBack();
  }

}
