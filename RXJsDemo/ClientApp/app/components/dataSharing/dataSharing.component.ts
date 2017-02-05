import { Component } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'dataSharing',
    template: require('./dataSharing.component.html')
})
export class DataSharingComponent {

    constructor(private nameService: NameService) {
    }
}
