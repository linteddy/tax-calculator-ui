export class IncomeTaxResult {
  payAsYouEarnBeforeTaxCredit: number;
  taxCredits: number;
  payAsYouEarnAfterTaxCredit : number;
  netCash: number;

  constructor(payAsYouEarnBeforeTaxCredit: number, taxCredits: number, payAsYouEarnAfterTaxCredit: number, netCash: number) {
    this.payAsYouEarnBeforeTaxCredit = payAsYouEarnBeforeTaxCredit;
    this.taxCredits = taxCredits;
    this.payAsYouEarnAfterTaxCredit = payAsYouEarnAfterTaxCredit;
    this.netCash = netCash;
  }
}
