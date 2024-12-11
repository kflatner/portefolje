import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'http://localhost:3000/cv';  // Adjust the URL to your API

  constructor(private http: HttpClient) {}

  getCvData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
