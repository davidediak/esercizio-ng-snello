import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Author } from '../models/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors: Author[];

  constructor(private apiCallsService: ApiCallsService) {}

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.apiCallsService
      .getAuthors()
      .subscribe(authors => (this.authors = authors));
  }
}
