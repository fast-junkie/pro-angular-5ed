import { Pipe } from "@angular/core";

@Pipe({
  name: "addTax"
})

export class PaAddTaxPipe {
  defaultRate: number = 10;
  transform(value: any, rate?: any) {
    const valueNumber: number = Number.parseFloat(value);
    const rateNumber: number = (rate === undefined) ? this.defaultRate : Number.parseInt(rate);
    return valueNumber + (valueNumber * (rateNumber / 100));
  }
}
