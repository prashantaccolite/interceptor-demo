import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTING } from '../../shared/constants/routing.constant';
import { BooksComponent } from './books.component';

const routes: Routes = [
  { path: "", redirectTo: ROUTING.BOOKS_DETAIL, pathMatch: "full" },
  { path: ROUTING.BOOKS_DETAIL, component: BooksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
