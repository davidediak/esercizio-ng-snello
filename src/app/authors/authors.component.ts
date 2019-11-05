import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authorsService
      .getList()
      .subscribe(authors => (this.authors = authors));
  }
}
