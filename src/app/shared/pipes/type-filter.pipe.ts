import { Pipe, PipeTransform } from '@angular/core';
import { PreorderBonusItem } from '../models/preorderBonus';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(array: PreorderBonusItem[], order: string): PreorderBonusItem[] {
    return array.filter((item: PreorderBonusItem) => item.order.startsWith(order));
  }
}
