import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = environment.clientId;
  private clientSecret = environment.clientSecret;
  private redirectUri = environment.redirectUri;
  private tokenUrl = environment.tokenUrl;
  
  constructor(private http: HttpClient) { }

  getAccessToken(authCode: string): Observable<any> {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', authCode)
      .set('redirect_uri', this.redirectUri)
      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    return this.http.post(this.tokenUrl, body.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}
