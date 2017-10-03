import { Component, Input, OnInit } from '@angular/core';
import { Device } from '../../utils/types/device';

@Component({
    selector: 'si-device-thumbnail',
    templateUrl: './device-thumbnail.component.html'
})
export class DeviceThumbnailComponent implements OnInit {

    @Input() device: Device;
    constructor() { }

    ngOnInit() {
        console.log(this.device);
    }
}