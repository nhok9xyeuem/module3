import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  post: Post;
  message: string;
  data: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private formbuider: FormBuilder
  ) {
  }

  ngOnInit() {
    this.data = this.formbuider.group({
      id: '',
      nameTitle: ['', [Validators.required]],
      content: ['', [Validators.required]],
      location: this.formbuider.group({})
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.findById(id).subscribe(
      next => {
        this.post = next;
        this.data.patchValue(this.post);
      },
      error => {
        this.post = null;
      }
    );
  }

  editBlog() {
    this.postService.updateBlog(this.data.value).subscribe(next => {
      this.message = 'Update success';
    });
  }
}
