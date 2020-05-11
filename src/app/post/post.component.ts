import { Component, OnInit } from '@angular/core'
import { post } from '../models/post'
import { postService } from '../services/post.service'
import { userService } from '../services/user.service'
import { user } from '../models/user'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: post = {} as post
  posts: post[]
  receber: any
  receber2: any

  users: user[];

  constructor(private servicePost: postService, private serviceUser: userService) { }

  exibirComentario(id) {
    this.posts.forEach(post => {
      if (post.id == id) {
        if (post.exibirComentario == true) {
          post.exibirComentario = false
        } else {
          post.exibirComentario = true
        }
      }
    });
  }

  async ngOnInit() {
    this.receber = await this.servicePost.get()
    this.posts = this.receber
    this.receber2 = await this.serviceUser.get();
    this.users = this.receber2;
  }

  async onSubmit(form) {
    console.log(form.value);
    let resposta = await this.servicePost.post(form.value);
    if (resposta.ok == true) {
      alert("Post publicado com suscesso.");
    } else {
      alert("Falha ao publicar o Post");
    }
  }

}
