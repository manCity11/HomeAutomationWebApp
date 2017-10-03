import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../utils/types/device';
import { DeviceService } from '../../service'

@Component({
    selector: 'si-device-thumbnail',
    templateUrl: './device-thumbnail.component.html'
})
export class DeviceThumbnailComponent {

    @Input() device: Device;
    constructor(private deviceService: DeviceService) { }

    deviceOn(state: boolean){
        console.log(this.device.isOn);
        this.deviceService
            .swithOn(this.device.id, state)
            .then(data => {
                this.device.isOn = state;
            });
    }
}