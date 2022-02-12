import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edition } from '../models/edition';
import { PreorderBonusItem } from '../models/preorderBonus';

@Injectable({
  providedIn: 'root'
})
export class EditionService {

  constructor(private http: HttpClient) { }

  /**
  * This method get edition by edition id
  * @param id string
  */
  getEditionById(id: string): Observable<Edition> {
    return this.http.get<Edition>(`/assets/mocks/${id}.json`);
  }

  /**
  * This method get preorder and bonus info by edition id
  * @param id string
  */
  getPreorderBonusByEditionId(id: string): Observable<PreorderBonusItem[]> {
    return this.http.get<PreorderBonusItem[]>(`/assets/mocks/${id}-preorderBonus.json`);
  }
}
