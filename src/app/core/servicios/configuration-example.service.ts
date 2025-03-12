import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationExampleService {

  private http = inject(HttpClient)
  private config: any;

  constructor() { }

  loadConfig() {
    return this.http.get('/config.json')
      .pipe(
        catchError((error) => {
          console.error('Failed to load config:', error);
          return of({});
        })
      )
      .toPromise()
      .then((data) => {
        this.config = data;
      
      });
  }
  
  getConfig() {
    return this.config;
  }
}
