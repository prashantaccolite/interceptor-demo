import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from './shared/constants/routing.constant';

const routes: Routes = [
  { 
    path: "", 
    redirectTo: ROUTING.BOOKS, 
    pathMatch: "full" 
  },
  {
    path: ROUTING.BOOKS, 
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
