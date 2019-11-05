import { Injectable } from '@angular/core';
import { AbstractServiceService } from './abstract-service.service';
import { Author } from '../models/author';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends AbstractServiceService<Author> {

  constructor(protected http: HttpClient) {
    super('/autori', http);
   }
}
