import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { API } from '../../../shared/constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private _http: HttpClient) { }

  getBooksDetail(): Observable<any> {
    const URL = API.BASE_URL + API.BOOKS_DETAIL;
    return this._http.get<any>(URL).pipe(
      map(data => {
        console.log('get response', data);
        return data;
      }),
      retry(1),
      catchError(this.handleError.bind(this))
    );
  }

  /**
* error Handling
* @param error , Error data
*/
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
