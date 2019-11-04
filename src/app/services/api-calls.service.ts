import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Post } from '../models/post';
import { Author } from '../models/author';
import { Attachment } from '../models/attachment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {
  private snelloUrl = 'http://127.0.0.1:8080/api';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.snelloUrl + '/posts').pipe(
      map(posts =>
        posts.map(post => {
          this.getAuthor(post.autore_id).subscribe(
            autore => (post.autore = autore)
          );
          return post;
        })
      )
    );
  }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(this.snelloUrl + '/autori');
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.snelloUrl + '/autori/' + id);
  }

  postAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>(this.snelloUrl + '/autori/', author);
  }

  putAuthor(id: string, author: Author): Observable<Author> {
    return this.http.put<Author>(this.snelloUrl + '/autori/'+ id, author);
  }

  deleteAuthor(id: string): Observable<Author> {
    return this.http.delete<Author>(this.snelloUrl + '/autori/' + id);
  }

  getAttachmentPath(id: string): Observable<string> {
    return this.http
      .get<Attachment>(this.snelloUrl + '/attachments/' + id)
      .pipe(
        map(attachment => attachment.path),
        tap(attachment => console.log(attachment))
      );
  }
}
