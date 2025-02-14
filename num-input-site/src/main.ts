import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { defineCustomElements } from '@ionic/core/loader';
import { provideIonicAngular } from '@ionic/angular/standalone';

defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
  ],
}).catch((err) => console.error(err));