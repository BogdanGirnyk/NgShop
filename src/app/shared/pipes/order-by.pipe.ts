import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: object[], field: string, desc: boolean = true): object[] {
    const orderMultiplier = desc ? 1 : -1;
    return value.sort((a, b) => {
      if (a[field] > b[field]) {
        return - 1 * orderMultiplier;
      } else if  (a[field] === b[field]) {
        return 0;
      }
      return 1 * orderMultiplier;
    });
  }

}
