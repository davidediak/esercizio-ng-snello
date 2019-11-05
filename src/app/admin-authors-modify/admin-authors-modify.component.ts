import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import { AuthorsService } from '../services/authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-authors-modify',
  templateUrl: './admin-authors-modify.component.html',
  styleUrls: ['./admin-authors-modify.component.css']
})
export class AdminAuthorsModifyComponent implements OnInit {
  author: Author = {nome: '', cognome: ''};

  constructor(private route: ActivatedRoute, private authorsService: AuthorsService) { }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.getAuthor(id);
  }

  getAuthor(id){
    this.authorsService.get(id).subscribe( author => {
      this.author = author;
      console.log(this.author);
    });
  }

  modifyAuthor() {
    console.log(this.author);
    this.authorsService.put(this.author.id, this.author).subscribe();
    this.goBack();
  }

  private goBack() {
    window.history.back();
  }
}
