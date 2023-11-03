import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return (value.length > args[0]) ? value.substring(0, args[0]) + "..." : value;
  }

}
