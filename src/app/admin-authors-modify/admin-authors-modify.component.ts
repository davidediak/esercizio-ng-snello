import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import {ApiCallsService} from '../services/api-calls.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-authors-modify',
  templateUrl: './admin-authors-modify.component.html',
  styleUrls: ['./admin-authors-modify.component.css']
})
export class AdminAuthorsModifyComponent implements OnInit {
  author: Author = {nome: '', cognome: ''};

  constructor(private route: ActivatedRoute, private apiCallsService: ApiCallsService) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.getAuthor(id);
  }

  getAuthor(id){
    this.apiCallsService.getAuthor(id).subscribe( author => {
      this.author = author;
      console.log(this.author);
    });
  }

  modifyAuthor() {
    console.log(this.author);
    this.apiCallsService.putAuthor(this.author.id, this.author).subscribe();
    this.goBack();
  }

  private goBack() {
    window.history.back();
  }
}
