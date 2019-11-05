import { Component, OnInit } from '@angular/core';
import {Author} from '../models/author';
import { AuthorsService } from '../services/authors.service';
import { ActivatedRoute } from '@angular/router';
import {AbstractEditComponent} from '../abstract/abstract-edit-component.component';

@Component({
  selector: 'app-admin-authors-modify',
  templateUrl: './admin-authors-modify.component.html',
  styleUrls: ['./admin-authors-modify.component.css']
})
export class AdminAuthorsModifyComponent extends AbstractEditComponent<Author> implements OnInit {
  element: Author = new Author();
  // {nome: '', cognome: ''};

  constructor(private route: ActivatedRoute, private authorsService: AuthorsService) {
    super(authorsService);
   }

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  this.get(id);
  }

  modifyAuthor() {
    console.log(this.element);
    this.put(this.element.id, this.element);
    this.goBack();
  }

}
