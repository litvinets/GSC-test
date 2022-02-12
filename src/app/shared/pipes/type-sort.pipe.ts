import { Pipe, PipeTransform } from '@angular/core';
import { PreorderBonusItem } from '../models/preorderBonus';

@Pipe({
  name: 'typeSort'
})
export class TypeSortPipe implements PipeTransform {

  transform(array: PreorderBonusItem[]): PreorderBonusItem[] {
    return array.sort((a: PreorderBonusItem, b: PreorderBonusItem) => {
      const firstItem = a.order.split('.');
      const secondItem = b.order.split('.');
      if (firstItem[1] >= secondItem[1]) {
        return (firstItem[2] < secondItem[2]) ? 1 : -1;
      } else {
        return -1;
      }
    })
  }
}