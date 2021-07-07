import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // Null | FormGroup => parecido a '?'
  form! : FormGroup;

  constructor() { }

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
    console.log();
  }

}
