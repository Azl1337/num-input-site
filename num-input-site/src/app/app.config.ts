import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { NumberService } from './app.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    NumberService, 
  ],
};