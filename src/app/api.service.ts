import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  private apiUrl = 'https://api.test.com/data'
  
  getStatusOfCompany(): Observable<any>{
	return this.httpClient.get<any>(this.apiUrl)
	
  }
}
