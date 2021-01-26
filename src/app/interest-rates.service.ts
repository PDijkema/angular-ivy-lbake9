import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class InterestRatesService {

  constructor(private http: HttpClient) { }

  getInterestRates() {
    return this.http.get("https://my-json-server.typicode.com/tdijkmans/MAGAPI/1_jaar");
  }

}