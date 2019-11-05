import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author';
import { AbstractListComponent} from '../abstract/abstract-list-component/abstract-list-component.component';

@Component({
  selector: 'app-admin-authors',
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent extends AbstractListComponent<Author> implements OnInit {

  authors: Author[];

  constructor(private authorsService: AuthorsService) {
    super(authorsService);
   }

  ngOnInit() {
    console.log('init');
    this.getList();
  }


  removeAuthor(id: string) {
    let authorToRemoveIdx = this.elements.findIndex( a => a.id === id);
    this.elements.splice(authorToRemoveIdx,1);
    console.log(this.elements);
    this.authorsService
    .delete(id)
    .subscribe();
  }
  
}
