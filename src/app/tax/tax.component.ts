import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IncomeTaxResult} from '../incomeTaxResult';
import {TaxService} from '../tax.service';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  // @ts-ignore
  calculateTaxForm: FormGroup;
  // @ts-ignore
  incomeTaxResult: IncomeTaxResult;

  constructor(private taxService: TaxService) {
  }

  ngOnInit(): void {
    this.calculateTaxForm = new FormGroup({
      year: new FormControl('', Validators.required),
      taxableIncome: new FormControl('', Validators.required),
      period: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      numberOfDependants: new FormControl('0')
    });
  }

  onSubmit(): void {
    this.taxService.calculateTax(
      this.calculateTaxForm.value.year,
      this.calculateTaxForm.value.age,
      this.calculateTaxForm.value.period,
      this.calculateTaxForm.value.numberOfDependants,
      this.calculateTaxForm.value.taxableIncome
    ).subscribe(
      value => this.incomeTaxResult = {
        netCash: value.netCash, payAsYouEarnAfterTaxCredit: value.payAsYouEarnAfterTaxCredit,
        payAsYouEarnBeforeTaxCredit: value.payAsYouEarnBeforeTaxCredit, taxCredits: value.taxCredits
      }
    );
  }
}
