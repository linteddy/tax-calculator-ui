import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {
  calculateTaxForm = new FormGroup({
    year: new FormControl('', Validators.required),
    gross: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.calculateTaxForm.value.gross);
  }
}
