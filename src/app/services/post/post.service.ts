import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interfaces/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseURI: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  async get() {
    const res = await this.http.get(this.baseURI).toPromise();
    return res;
  }

  async getByID(id: number) {
    const res = await this.http.get(`${this.baseURI}/${id}`).toPromise();
    return res;
  }

  async post(post: Post) {
    return await this.http.post(this.baseURI, post);
  }
}
