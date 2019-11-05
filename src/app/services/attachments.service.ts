import { Injectable } from '@angular/core';
import { AbstractServiceService } from './abstract-service.service';
import { Attachment } from '../models/attachment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttachmentsService extends AbstractServiceService<Attachment>{

  constructor(protected http: HttpClient) {
    super('/attachments', http);
   }
}
