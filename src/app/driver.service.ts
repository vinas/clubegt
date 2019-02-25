import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { DRIVERS } from './mock-drivers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor() { }

  getDriversList(): Observable<Driver[]> {
    return of(DRIVERS);
  }

}
