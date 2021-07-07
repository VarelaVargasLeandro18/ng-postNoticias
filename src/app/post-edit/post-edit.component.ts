import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // Null | FormGroup => parecido a '?'
  form! : FormGroup;

  constructor(
    private postService : PostService,
    private router : Router
    ) { }

  ngOnInit(): void {
    // Creamos el FormGroup
    this.form = new FormGroup({
      title: new FormControl(
        null, 
        [Validators.required, Validators.maxLength(10)]
      ),
      description: new FormControl(
        null,
        [Validators.required]
      ),
      imagePath: new FormControl(
        null,
        [Validators.required]
      )
    })
  }

  onSubmit() : void {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;

    const post = new Post( 
      title, 
      description, 
      imagePath,
      'test@test.com',
      new Date()  
    );

    this.postService.addPost(post);
    this.form.reset();
    this.router.navigate([`post-list`]);
  }

}
