import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors } from '@angular/common/http';
import { headersInterceptor } from './core/interceptors/headers.interceptor';
import { errorhandlerInterceptor } from './core/interceptors/errorhandler.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(
      withInterceptors([headersInterceptor,errorhandlerInterceptor])
   ),
    provideRouter(routes),
    provideHttpClient()
  ]
};
