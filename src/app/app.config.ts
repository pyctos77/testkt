import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { errorhandlerInterceptor } from './core/interceptors/errorhandler.interceptor';
import { ConfigurationExampleService } from './core/servicios/configuration-example.service';
import { initializeApp } from './initializer';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigurationExampleService],
      multi: true,
    },
    
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(
      withInterceptors([headersInterceptor,errorhandlerInterceptor])
   ),
    provideRouter(routes),
    provideHttpClient()
  ]
};
