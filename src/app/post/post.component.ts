import { Component, Input, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post? : Post;

  constructor(
    private postService : PostService
  ) { }

  ngOnInit(): void {
    console.log(this.post);
  }

  onDelete() : void {

    let index : number = this.postService.getPosts().findIndex ( (element) => element === this.post );
    
    if ( index === -1 ) return

    let deleted : Post = this.postService.deletePost(index);
  }

}
