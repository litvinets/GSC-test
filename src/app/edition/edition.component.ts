import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Constants } from '../shared/constants/constants';
import { EditionTitle } from '../shared/enum/edition';
import { Edition } from '../shared/models/edition';
import { EditionService } from '../shared/services/edition.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit, OnDestroy {
  readonly editionTitle = EditionTitle;
  readonly constants = Constants;


  currentEditionTitle: string = EditionTitle.ultimate;
  currentEdition: Edition;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private editionService: EditionService) { }

  ngOnInit(): void {
    this.getEdition(EditionTitle.ultimate);
  }

  onNavigate(editionTtitle: string): void {
    this.getEdition(editionTtitle);
    this.currentEditionTitle = editionTtitle;
  }

  private getEdition(editionTtitle: string): void {
    this.editionService.getEditionById(EditionTitle[editionTtitle]).pipe(
      takeUntil(this.destroy$)
    ).subscribe(((edition: Edition) => this.currentEdition = edition));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
