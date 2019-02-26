import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Driver } from './driver';
import { DRIVERS } from './mock-drivers';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class DriverService {

  constructor(private messageService: MessageService) { }

  getDriversList(): Observable<Driver[]> {
    this.messageService.add('DriverService.getDriversList');
    return of(DRIVERS);
  }

  getDriver(id: number) {
    this.messageService.add('DriverService.getDriver('+id+')');
    return of(DRIVERS.find(hero => hero.id === id));
  }

}
