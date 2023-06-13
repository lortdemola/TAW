import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myItemsFilter'
})
export class MyItemsFilterPipe implements PipeTransform {

  transform(value: any[], filterText: any): any {
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }

    filterText = filterText.toLowerCase();
    return value.filter(val => {
      return val.seller.toLowerCase().includes(filterText);
    });
  }
}
