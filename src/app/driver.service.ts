import { Injectable } from '@angular/core';
import { Driver } from './driver';
import { DRIVERS } from './mock-drivers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private messageService: MessageService) { }

  getDriversList(): Observable<Driver[]> {
    this.messageService.add('teste bunda');
    return of(DRIVERS);
  }

}
