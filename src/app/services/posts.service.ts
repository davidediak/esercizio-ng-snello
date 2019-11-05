import { Injectable } from '@angular/core';
import { AbstractServiceService } from './abstract-service.service';
import { Post } from '../models/post';
import {HttpClient} from '@angular/common/http';
import {AttachmentsService} from '../services/attachments.service';

import { Observable, pipe } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Attachment } from '../models/attachment';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends AbstractServiceService<Post>{
  private snelloUrl = 'http://127.0.0.1:8080/api';

  constructor(protected http: HttpClient, private attachmentsService: AttachmentsService) {
    super('/posts', http);
   }

   getAttachmentPath(id: string): Observable<string> {
     console.log('getting attachment path');
    return this.attachmentsService
      .get(id)
      .pipe(
        map(attachment => attachment.path),
        tap(attachment => console.log(attachment))
      );
  }
}
