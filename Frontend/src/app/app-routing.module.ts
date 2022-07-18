import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component'
import { NewBookComponent } from './newbook/newbook.component';
import {LoginComponent} from './login/login.component';
import { UpdateBookComponent } from './update-book/update-book.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  },
  {
    path: 'book',
    component:BookComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {path:'add', 
  canActivate: [AuthGuard],
  component: NewBookComponent,
},
{
  path:'update',
  component:UpdateBookComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
