import {Injectable} from '@angular/core';
import {environment} from '../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly API_URL = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.API_URL}`);
  }

  findById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.API_URL}/view/${id}`);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete/${id}`);

  }


  createBlog(post: Partial<Post>): Observable<Post> {
    return this.http.post<Post>(`${this.API_URL}/create`, post);
  }

  updateBlog(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.API_URL}/update/${post.id}`, post);

  }
}

