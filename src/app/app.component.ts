import { 
  Component, 
  OnInit } from '@angular/core';

import { DeviceService } from './service';
import { Device } from './utils/types/device';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Component properties
  deviceList: Array<Device> = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService
      .getAllDevices()
      .then(data => {
        this.deviceList = data.devices;
      });
  }
}
