import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
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

  async post(user: User) {
    return await this.http.post(this.baseURI, user);
  }
}
