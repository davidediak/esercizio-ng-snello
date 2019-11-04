import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import {ApiCallsService} from '../services/api-calls.service';

@Component({
  selector: 'app-admin-authors-add',
  templateUrl: './admin-authors-add.component.html',
  styleUrls: ['./admin-authors-add.component.css']
})
export class AdminAuthorsAddComponent implements OnInit {

  author: Author = {nome: '', cognome: ''};

  constructor(private apiCallsService: ApiCallsService) { }

  ngOnInit() {
  }

  addAuthor() {
    this.apiCallsService.postAuthor(this.author).subscribe();
    console.log(this.author);
    this.goBack();
  }

  private goBack() {
    window.history.back();
  }

}
