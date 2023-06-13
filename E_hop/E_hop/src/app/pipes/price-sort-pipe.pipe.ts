import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceSort'
})
export class PriceSortPipePipe implements PipeTransform {

  transform(items: any[], sortDescending: boolean = true): any[] {
    if (!items || items.length <= 1) {
      return items;
    }

    const sortOrder = sortDescending ? -1 : 1;

    return items.sort((a, b) => (a.price - b.price) * sortOrder);
  }
}
