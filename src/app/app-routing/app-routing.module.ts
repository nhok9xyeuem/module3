import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from '../blog/blog.component';
import {BlogEditComponent} from '../blog-edit/blog-edit.component';
import {BlogDetailComponent} from '../blog-detail/blog-detail.component';
import {BlogDeleteComponent} from '../blog-delete/blog-delete.component';
import {BlogCreateComponent} from '../blog-create/blog-create.component';


// khai bao duong dan den cac compunent
const routes: Routes = [
  {
    path: 'home',
    component: BlogComponent
  },
  {
    path: 'edit/:id',
    component: BlogEditComponent
  },
  {
    path: 'delete/:id',
    component: BlogDeleteComponent
  },
  {
    path: 'create',
    component: BlogCreateComponent
  },
  {
    path: 'content/:id',
    component: BlogDetailComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
