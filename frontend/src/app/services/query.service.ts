import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const baseUrl = 'http://127.0.0.1:5000/api'
const baseUrlOther = 'http://127.0.0.1:5000/api1'

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http: HttpClient) {
  }

  getQuery1Division(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query1`);
  }
  getQuery2NameSales(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query2`);
  }
  getQuery3BarishalSales(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query3`);
  }
  getQuery4SalesYear(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query4`);
  }
  getQuery5DivisionSalesYear(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query5`);
  }
  getQuery6ItemQuantityStore(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query6`);
    
  }
  getDataByDays(days: string): Observable<any> {
    return this.http.post<any>(`${baseUrl}/query7`, {days: days});
  }
  getQuery7ItemName(days: string): Observable<any> {
    return this.http.post<any>(`${baseUrl}/query7`, {days: days});
    
  }
  getQuery8ItemQuantityQuarter(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query8`);
  }
  getQuery9DivisionItemQuantity(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query9`);
  }
  getQuery10MonthQuantityStore(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/query10`);
  }
  getan1aStoreSale(): Observable<any> {
    return this.http.get<any>(`${baseUrl}/an1a`);
  }
}
