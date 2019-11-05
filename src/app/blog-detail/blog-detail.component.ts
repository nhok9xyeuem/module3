import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../post';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  outPutConten: Post;

  constructor(private post: PostService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.post.findById(id).subscribe(
      next => (this.outPutConten = next),
      error => {
        console.log(error);
        this.outPutConten = null;
      });

  }
}
