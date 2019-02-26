import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})

export class DriverDetailComponent implements OnInit {

  driver: Driver;

  constructor(
    private route: ActivatedRoute,
    private driverService: DriverService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDriver();
  }

  getDriver() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.driverService.getDriver(id)
      .subscribe(driver => this.driver = driver);
  }

  goBack(): void {
    this.location.back();
  }
  
}
