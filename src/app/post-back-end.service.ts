import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post/post.model";
import { PostService } from "./post/post.service";
import { tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostBackendService {

    constructor(
        private postService : PostService,
        private http : HttpClient
    ) {}

    savePosts() {
        const postList : Post[] = this.postService.getPosts();

        this.http.put(
            "https://udemy-live-posts-default-rtdb.firebaseio.com/posts.json",
            postList
        ).subscribe( (response) => {
            console.log(response)
        } );
    }

    fetchData() {
        this.http.get<Post[]>(
            "https://udemy-live-posts-default-rtdb.firebaseio.com/posts.json"
        ).pipe(
            tap( (postList: Post[]) => {
                this.postService.setPostList(postList);
            } )
        )
        .subscribe();
    }

}