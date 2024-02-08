import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { CompanyData } from '../types/company-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient) {
  }

  public fetchData(): Observable<CompanyData> {
    return this.http.get<CompanyData>('assets/company.json').pipe(delay(2_000)); //delay for demo only
  }
}
