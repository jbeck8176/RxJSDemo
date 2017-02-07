import { Component, Input, OnInit } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'dataSharingInnerDiff',
    template: require('./dataSharingInnerDiff.component.html')
})
export class DataSharingInnerDiffComponent {
    @Input() title: string;

    namesToShow: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.nameService.names.subscribe((names) => this.namesToShow = [...names]);
    }
}
