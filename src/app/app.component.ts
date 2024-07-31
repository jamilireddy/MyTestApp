import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { XeroService } from './xero.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //constructor(private apiService: ApiService){}
  title = 'MyTestFirstApp';
  /*onClick(){
	//alert('Button Clicked')
	this.apiService.getStatusOfCompany().subscribe(
		data =>{
			alert('API success');
		},
		error =>{
			alert('API Failed');
		}
	);
	
  }*/
  
  vendors: any[] = [];
  accessToken: string | undefined;

  constructor(private authService: AuthService, private xeroService: XeroService) { }

  authenticate() {
    const authUrl = `${environment.authUrl}?response_type=code&client_id=${environment.clientId}&redirect_uri=${environment.redirectUri}&scope=openid profile email accounting.contacts&state=12345`;
    window.location.href = authUrl;
  }

  getAccessToken(authCode: string) {
    this.authService.getAccessToken(authCode).subscribe(response => {
      this.accessToken = response.access_token;
      this.getVendors();
    });
  }

  getVendors() {
    if (this.accessToken) {
      this.xeroService.getVendors(this.accessToken).subscribe(response => {
        this.vendors = response.Contacts;
      });
    }
  }
}
