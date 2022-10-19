import { Component, OnInit } from '@angular/core';

import { BooksService } from './services/books.service';
import { IBooks } from './model/books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(private _booksService: BooksService) { }

  verses!: IBooks[];

  ngOnInit(): void {
    this._booksService.getBooksDetail().subscribe((data: any) => {
      this.verses = data.verses;
    })
  }

}
