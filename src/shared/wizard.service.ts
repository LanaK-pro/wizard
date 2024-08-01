import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Iwizard } from './iwizard';
import { environment } from '../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  url = environment.apiURL;
  constructor(private http: HttpClient) {}

  fetchAll(): Observable<Iwizard[]> {
    return this.http
      .get<Iwizard[]>(this.url)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any) {
    console.error('une erreur trouvé', error);
    return throwError("L'api ne marche plus");
  }
}
