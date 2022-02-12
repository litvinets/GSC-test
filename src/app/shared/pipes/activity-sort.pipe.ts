import { Pipe, PipeTransform } from '@angular/core';
import { PreorderBonusItem } from '../models/preorderBonus';

@Pipe({
  name: 'activitySort'
})
export class ActivitySortPipe implements PipeTransform {

  transform(array: PreorderBonusItem[]): PreorderBonusItem[] {
    return array.sort((a: PreorderBonusItem) => (a.isActive) ? -1 : 1);
  }

}
