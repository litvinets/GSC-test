import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EditionTitle } from 'src/app/shared/enum/edition';
import { PreorderBonus } from 'src/app/shared/models/preorderBonus';
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
    ).subscribe(((preorderBonus: PreorderBonus) => this.preorderBonus = preorderBonus));
  };

  destroy$: Subject<boolean> = new Subject<boolean>();
  preorderBonus: PreorderBonus;

  constructor(private editionService: EditionService) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
