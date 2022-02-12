import { Pipe, PipeTransform } from '@angular/core';
import { PreorderBonusItem } from '../models/preorderBonus';

@Pipe({
  name: 'typeSort'
})
export class TypeSortPipe implements PipeTransform {

  transform(array: PreorderBonusItem[]): PreorderBonusItem[] {
    return array.sort((a: PreorderBonusItem, b: PreorderBonusItem) => (a.order > b.order) ? -1 : 1);
  }

}
