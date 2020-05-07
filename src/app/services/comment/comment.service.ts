import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../../interfaces/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseURI: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  async get() {
    const res = await this.http.get(this.baseURI).toPromise();
    return res;
  }

  async getByID(id: number) {
    const res = await this.http.get(`${this.baseURI}/${id}`).toPromise();
    return res;
  }

  async post(comment: Comment) {
    return await this.http.post(this.baseURI, comment);
  }
}
