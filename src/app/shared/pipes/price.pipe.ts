import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return value.toFixed(args[0]) + args[1];
  }

}
