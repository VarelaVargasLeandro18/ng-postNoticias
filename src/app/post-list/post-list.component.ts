import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  listOfPosts : Post[] = [];

  constructor(private postService : PostService) { }

  ngOnInit(): void {
    this.postService.listChangedEvent.subscribe( (postList : Post[]) => {
      this.listOfPosts = postList;
    } );

    this.listOfPosts = this.postService.getPosts();
  }

}
