import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { AuthorsComponent } from './authors/authors.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAuthorsComponent } from './admin-authors/admin-authors.component';
import { AdminAuthorsAddComponent } from './admin-authors-add/admin-authors-add.component';
import { AdminAuthorsModifyComponent } from './admin-authors-modify/admin-authors-modify.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/authors',
    component: AdminAuthorsComponent
  },
  {
    path: 'admin/authors/add',
    component: AdminAuthorsAddComponent
  },
  {
    path: 'admin/authors/modify/:id',
    component: AdminAuthorsModifyComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
