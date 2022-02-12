import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Requirements } from '../shared/models/requirements.model';
import { RequirementsService } from '../shared/services/requirements.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit, OnDestroy {
  readonly voiseSubLang = ['ru', 'ua', 'en'];
  readonly subLang = [['it', 'jpn', 'pol', 'kor'], ['esp', 'china', 'china_tr', 'grm'], ['bz', 'fr']];

  destroy$: Subject<boolean> = new Subject<boolean>();
  totalRequirements: Requirements[] = [];

  constructor(private requirementsService: RequirementsService) { }

  ngOnInit(): void {
    this.requirementsService.getRequirements().pipe(
      takeUntil(this.destroy$)
    ).subscribe(((requirements: Requirements[]) => this.totalRequirements = requirements));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
