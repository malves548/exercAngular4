import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'nav', component: NavComponent },
  { path: 'user', component: UserComponent },
  { path: 'post', component: PostComponent },
  { path: 'comment', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
