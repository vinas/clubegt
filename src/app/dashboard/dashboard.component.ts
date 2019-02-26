import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  drivers: Driver[];

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.getDrivers();
  }

  getDrivers(): void {
    this.driverService.getDriversList()
      .subscribe(drivers => this.drivers = drivers.slice(1, 5));
  }

}
