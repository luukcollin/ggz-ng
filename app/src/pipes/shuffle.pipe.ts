import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kaas',
  standalone: true
})
export class ShufflePipe implements PipeTransform {
  //Goal;
  //Input: "Hoi"
  //Output: "iHo"
  transform(value: string, ...args: unknown[]): unknown {
    let result = ""
    for(let i = value.length-1; i >= 0; i--){
      result += value.charAt(i)
    } 
    return result;
  }
}
