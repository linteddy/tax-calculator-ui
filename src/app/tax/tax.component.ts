import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IncomeTaxResult} from '../incomeTaxResult';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  calculateTaxForm = new FormGroup({
    year: new FormControl('', Validators.required),
    taxableIncome: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    numberOfDependants: new FormControl('0')
  });
  public incomeTaxResult = new IncomeTaxResult(4657.58, 319.00, 4338.58, 25661.42);

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.calculateTaxForm.value.gross);
  }
}
