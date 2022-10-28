import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable()
export class AccountService {

  private accountApi = 'api/';

  constructor(private http: HttpClient) { }

  public helloWorl(): Observable<string> {

    return this.http.get<string>(this.accountApi + 'hello')
      .pipe(
        map(x => x),
        catchError(error => {
          console.log(error);

          return of('error');
        })
      );
  }
}
