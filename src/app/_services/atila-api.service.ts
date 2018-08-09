import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtilaApiService {

  public emailEndpoint = environment.apiUrl + 'send-email/';


  constructor
  (public http: HttpClient) {
  }

  sendEmail(emailData: any) {
    return this.http.post(this.emailEndpoint, emailData)
      .pipe(
        map(res => <any>res),
        catchError(err => throwError(err)));
  }

}
