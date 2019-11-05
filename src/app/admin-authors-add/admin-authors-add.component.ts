import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-admin-authors-add',
  templateUrl: './admin-authors-add.component.html',
  styleUrls: ['./admin-authors-add.component.css']
})
export class AdminAuthorsAddComponent implements OnInit {

  author: Author = {nome: '', cognome: ''};

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
  }

  addAuthor() {
    this.authorService.post(this.author).subscribe();
    console.log(this.author);
    this.goBack();
  }

  private goBack() {
    window.history.back();
  }

}
