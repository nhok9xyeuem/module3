import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  post: Post;
  message: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.findById(id).subscribe(
      next => (this.post = next),
      error => {
        console.log(error);
        this.post = null;
      }
    );
  }

  deleteBlog(id: number) {
    this.postService.deleteBlog(id).subscribe(() => {
      this.message = 'Delete success';
    }, this.errorHandle);

  }

  errorHandle(error: any) {
    alert('Thao tac khong thanh cong');
  }


}
