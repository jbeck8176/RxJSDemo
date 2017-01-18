import { Component } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'elementEvents',
    template: require('./elementEvents.component.html')
})
export class ElementEventsComponent {
    names: string[];
    namesSearch: string[];

    constructor(private nameService: NameService) {
    }
}
