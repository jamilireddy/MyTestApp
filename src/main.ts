import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

const urlParams = new URLSearchParams(window.location.search);
const authCode = urlParams.get('code');

if (authCode) {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .then(appModuleRef => {
      const appRef = appModuleRef.injector.get(AppComponent);
      appRef.getAccessToken(authCode);
    });
} else {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
