import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  data: FormGroup;
  message: string;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.data = this.formBuilder.group({
      nameTitle: ['', [Validators.required]],
      content: ['', [Validators.required]],
      location: this.formBuilder.group({})
    });
  }

  createBlog() {
    this.postService.createBlog(this.data.value).subscribe(next => {
      this.message = 'Add Member Success';
    });
  }
}
