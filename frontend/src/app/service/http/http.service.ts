import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_ROOT = environment.API_ROOT;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  get(url: string, params?: any): Observable<any> {
    return this.httpClient.get(this.API_ROOT + url, {
      params
    });
  }
}
