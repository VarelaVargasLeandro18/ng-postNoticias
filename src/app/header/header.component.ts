import { Component, OnInit } from '@angular/core';
import { PostBackendService } from '../post-back-end.service';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private post_backend_service : PostBackendService,
    private postService : PostService
  ) { }

  ngOnInit(): void {
    this.onFetch();
  }

  onSave() : void {
    this.post_backend_service.savePosts();
  }

  onFetch() {
    this.post_backend_service.fetchData();
  }

}
