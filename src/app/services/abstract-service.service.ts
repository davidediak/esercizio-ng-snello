import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpParams, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbstractServiceService<T> {
  private baseUrl: string = 'http://127.0.0.1:8080/api'


  constructor(protected url: string, protected http: HttpClient) {
    this.url = this.baseUrl + url;
  }

  public getList(): Observable<T[]> {
    return this.http.get<T[]>( this.url);
  }

  public get(id: string): Observable<T> {
    return this.http.get<T>( this.url + `/${id}`);
  }

  public post(element: T): Observable<T> {
    return this.http.post<T>( this.url, element);
  }

  public put(id: string, element: T): Observable<T> {
    return this.http.put<T>( this.url + `/${id}`, element);
  }

  public delete(id: string): Observable<T> {
    return this.http.delete<T>( this.url  + `/${id}`);
  }
}
