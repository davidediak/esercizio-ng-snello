import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';
import { Author } from '../models/author';
import { AbstractListComponent} from '../abstract/abstract-list-component/abstract-list-component.component';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent  extends AbstractListComponent<Author> implements OnInit{
  authors: Author[];

  constructor(private authorsService: AuthorsService) {
    super(authorsService);
  }

  ngOnInit() {
    this.getList();
  }
}
