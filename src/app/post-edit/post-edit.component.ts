import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  index : number = -1;
  editMode : boolean = false;

  constructor(
    private postService : PostService,
    private router : Router,
    private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imgPath = '';

    this.route.params.subscribe( (params: Params) => {
      if ( params['index'] ) {
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imgPath = post.imagePath;

        this.editMode = true;
      }
    } );

    // Creamos el FormGroup
    this.form = new FormGroup({
      title: new FormControl(
        title, 
        [Validators.required, Validators.maxLength(10)]
      ),
      description: new FormControl(
        description,
        [Validators.required]
      ),
      imagePath: new FormControl(
        imgPath,
        [Validators.required]
      )
    });
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
      new Date(),
      -1 /* Debe cambiar */  
    );

    if (!this.editMode) 
      this.postService.addPost(post);
    else
      this.postService.updatePost(this.index, post);
      
    this.form.reset();
    this.router.navigate([`post-list`]);
  }

}
