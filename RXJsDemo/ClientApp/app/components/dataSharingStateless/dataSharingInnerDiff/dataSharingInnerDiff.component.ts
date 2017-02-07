import { Component, Input, Output } from '@angular/core';

import { NameService } from './../../../services/name.service';

@Component({
    selector: 'dataSharingInnerDiffStatless',
    template: require('./dataSharingInnerDiff.component.html')
})
export class DataSharingInnerDiffComponentStatless {
    @Input() title: string;
    @Input() namesToShow: string[]

    constructor(private nameService: NameService) {
    }
}
