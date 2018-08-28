import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AtilaApiService {

  public emailEndpoint = environment.microServicesApiUrl + 'send-email/';


  constructor
  (public http: HttpClient) {
  }

  sendEmail(emailData: any) {
    return this.http.post(this.emailEndpoint, emailData)
      .pipe(
        map(res => <any>res),
        catchError(err => throwError(err))
      );
  }

  getAtilaContent(urlPath) {
    // todo add tech.atila.ca to server CORS Allow
    const testUrlPath = 'https://api.myjson.com/bins/18mldc';
    // return this.http.get(`${testUrlPath}`)
    return this.http.get(`${testUrlPath}`)
      .pipe(
        map(res => <any>res),
        catchError(err => throwError(err))
      );
  }


}
