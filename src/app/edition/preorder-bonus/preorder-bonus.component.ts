import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { EditionTitle } from 'src/app/shared/enum/edition';
import { PreorderBonus } from 'src/app/shared/enum/preorderBonus';
import { PreorderBonusItem } from 'src/app/shared/models/preorderBonus';
import { EditionService } from 'src/app/shared/services/edition.service';

@Component({
  selector: 'app-preorder-bonus',
  templateUrl: './preorder-bonus.component.html',
  styleUrls: ['./preorder-bonus.component.scss']
})
export class PreorderBonusComponent implements OnInit, OnDestroy {

  @Input() set currentEditionTitle(currentEditionTitle: string) {
    this.editionService.getPreorderBonusByEditionId(EditionTitle[currentEditionTitle]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(((preorderBonusItems: PreorderBonusItem[]) => this.fullList = this.sortOrder(preorderBonusItems)));
  };

  readonly preorderBonus = PreorderBonus;

  destroy$: Subject<boolean> = new Subject<boolean>();
  isMobileView: boolean = false;
  fullList: PreorderBonusItem[];

  constructor(private editionService: EditionService) { }

  ngOnInit(): void {
    this.isWindowMobile(window);
  }

  @HostListener('window: resize', ['$event.target'])
  onResize(event: any): void {
    this.isWindowMobile(event);
  }

  private sortOrder(list: PreorderBonusItem[]): PreorderBonusItem[] {
    return list.sort((a: PreorderBonusItem, b: PreorderBonusItem) => (a.order > b.order) ? -1 : 1);
  }

  private isWindowMobile(event: any): void {
    this.isMobileView = event.innerWidth <= 660;
  }


  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
