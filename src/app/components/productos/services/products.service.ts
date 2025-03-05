import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Character } from '../../../core/models/character.model';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  private character ='character/';
  constructor(private http: HttpClient) {}

  
   headers = new HttpHeaders({
    'token-user': '3232323',
  });

  getAll() {
    return this.http.get<Character[]>(`${environment.baseUrlAPI}${this.character}`)
    .pipe(catchError((err) => this.handleHttpError(err)),
    map((response: any) => response.results) 
    );
  }
  
  private handleHttpError(
    error:HttpErrorResponse
  ):Observable<any>{

    return throwError('An error occured retrienving data.');
  }
}
