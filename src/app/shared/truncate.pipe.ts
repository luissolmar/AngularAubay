import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

 transform(value: string, ...args: number[]): any {
   if (args[0] > 0) {
     if (args[0] < value.length)
       return value.slice(0, args[0]-3)+'...'
   }
   return value;
}

  // transform(value: string, num: number[]): any {
  //   if (num[0] > 0) {
  //     if (num[0] < value.length)
  //       return value.slice(0, num[0])
  //   }
  //   return value;
  // }

}
