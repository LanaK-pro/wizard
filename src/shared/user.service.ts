import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Iuser } from './iuser';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  urlUser = environment.apiUser;
  constructor(private http: HttpClient) {}

  fetchAllUsers(): Observable<Iuser[]> {
    return this.http
      .get<Iuser[]>(this.urlUser)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.error('une erreur trouvé', error);
    return throwError("L'api ne marche plus");
  }
}
