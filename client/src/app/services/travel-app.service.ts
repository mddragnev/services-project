import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TravelApp } from './travel-app';

@Injectable({
  providedIn: 'root'
})
export class TravelAppService {
  public getData(tableName: string): Observable<any> {
    return of(TravelApp[tableName]);
  }
}
