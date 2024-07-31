import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class XeroService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVendors(accessToken: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${accessToken}`,
      'Accept': 'application/json'
    });

    return this.http.get(this.apiUrl, { headers });
  }
}
