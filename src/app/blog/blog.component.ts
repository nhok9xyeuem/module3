import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  outPut: Post[];

  constructor(private postService: PostService) {
    this.postService.findAll().subscribe(next => {
        this.outPut = next;
      },
      error => {
        alert('Loi Roi' + error);
      }
    );
  }

  ngOnInit() {
  }

}
