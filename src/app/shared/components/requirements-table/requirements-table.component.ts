import { Component, Input, OnInit } from '@angular/core';
import { Requirements } from '../../models/requirements.model';

@Component({
  selector: 'app-requirements-table',
  templateUrl: './requirements-table.component.html',
  styleUrls: ['./requirements-table.component.scss']
})
export class RequirementsTableComponent implements OnInit {

  @Input() requirements: Requirements;

  constructor() { }

  ngOnInit(): void {
  }

}
