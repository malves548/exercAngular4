import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class postService {
  private JsonExample = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  async get() {
    let resposta = await this.http.get(this.JsonExample).toPromise();
    console.log(resposta)
    return resposta
  }

  async getById(id) {
    let resposta = await this.http.get(this.JsonExample + id).toPromise()
    console.log(resposta)
    return resposta
  }

  async post(obj) {
    console.log("Inicializando o post")
    let resposta = await this.http.post(this.JsonExample, obj, { observe: 'response' }).toPromise()
    console.log("Post finalizado")
    console.log(resposta)
    return resposta
  }
}
