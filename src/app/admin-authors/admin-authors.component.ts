import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {

  authors: Author[];

  constructor(private authorService: AuthorsService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorService
      .getList()
      .subscribe(authors => (this.authors = authors));
  }

  removeAuthor(id: string) {
    let authorToRemoveIdx = this.authors.findIndex( a => a.id === id);
    this.authors.splice(authorToRemoveIdx);
    console.log(this.authors);
    this.authorService
    .delete(id)
    .subscribe();
  }
  
}
