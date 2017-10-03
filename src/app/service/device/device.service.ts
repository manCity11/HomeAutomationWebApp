import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeviceService {

    constructor(private http: Http) { }

    getAllDevices() {
        return this.http
            .get(`http://localhost:8000/graphql?query={devices{id,name,pinNumber,isOn}}`)
            .toPromise()
            .then(response => response.json().data)
            .catch(err => console.log('failed to load device list'));
    }

    getDevice(id: string) {
        return this.http
        .get(`http://localhost:8000/graphql?query={device(id:${id}{id,name,pinNumber,isOn}}`)
        .toPromise()
        .then(response => response.json().data)
        .catch(err => console.log('failed to load resource'));
    }

    swithOn(id: string, state: boolean) {
        return this.http
        .post(`http://localhost:8000/graphql?query=mutation{deviceOnOff(id:"${id}",isOn:${state}){id,name,isOn}}`, {})
        .toPromise()
        .then(response => response.json().data)
        .catch(err => console.log('Failed to do the interaction'));
    }
}