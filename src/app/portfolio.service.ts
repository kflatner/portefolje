import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:3000/api/portfolio';  // Adjust the URL to your API

  constructor(private http: HttpClient) {}

  getPortfolioData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
