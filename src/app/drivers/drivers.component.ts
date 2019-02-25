import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  drivers: Driver[];  
  selectedDriver: Driver;

  constructor(private driverService: DriverService) { }

  ngOnInit() {
    this.getDrivers();
  }

  onSelect(driver: Driver): void {
    this.selectedDriver = driver;
  }

  getDrivers(): void {
    this.driverService.getDriversList()
        .subscribe(drivers => this.drivers = drivers);
  }

}
