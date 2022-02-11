import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requirements } from '../models/requirements.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  constructor(private http: HttpClient) { }

  /**
  * This method get requirements
  */
  getRequirements(): Observable<Requirements[]> {
    return this.http.get<Requirements[]>(`/assets/mocks/requirements.json`);
  }
}
