import { Component, OnInit, Input } from '@angular/core';
import { Driver } from '../driver';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {

  @Input() driver: Driver;
  
  constructor() { }

  ngOnInit() {
  }

}
