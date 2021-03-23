import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IncomeTaxResult} from './incomeTaxResult';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class TaxService {
  constructor(private http: HttpClient) {
  }

  calculateTax(taxYear: number, age: number, period: string, numberOfDependants: number, income: number)
    : Observable<IncomeTaxResult> {
    const url = 'https://linteddy-tax-calculator.herokuapp.com/api/tax/income-tax?year=' + taxYear + '&age=' + age + '&income='
      + income + '&period=' + period + '&medicalAidMembers=' + numberOfDependants;
    return this.http.get<IncomeTaxResult>(url);
  }
}
