import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDataModel } from './models/company-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  constructor(private http: HttpClient) {
  }

  fetchData(): Observable<CompanyDataModel> {
    return this.http.get<CompanyDataModel>('assets/company.json');
  }
}
