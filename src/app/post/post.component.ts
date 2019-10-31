import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private apiCallsService: ApiCallsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.apiCallsService.getPosts().subscribe(posts => {
      posts.map(post => {
        this.apiCallsService
          .getAttachmentPath(post.attachments)
          .subscribe(path => (post.pathImage = path));
      });
      console.log(...posts);
      return (this.posts = posts);
    });
  }
}
