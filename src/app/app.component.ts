import { 
  Component, 
  OnInit } from '@angular/core';

  import { DeviceService } from './service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
    this.deviceService
      .getAllDevices()
      .then(devices => {
        console.log(devices);
      });
  }
}
