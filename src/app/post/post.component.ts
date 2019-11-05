import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AuthorsService } from '../services/authors.service';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService, private authorsService: AuthorsService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postsService.getList().subscribe(posts => {
      posts.map(post => {
        this.postsService
          .getAttachmentPath(post.attachments)
          .subscribe(path => (post.pathImage = path));

        this.authorsService
          .get(post.autore_id)
          .subscribe(autore => (post.autore = autore));
      });
      console.log(...posts);
      return (this.posts = posts);
    });
  }
}
