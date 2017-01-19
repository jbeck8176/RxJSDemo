import { Component, Input, OnInit } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'dataSharingInner',
    template: require('./dataSharingInner.component.html')
})
export class DataSharingInnerComponent {
    @Input() title: string;

    names: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.nameService.getAllNamesNoCache().subscribe((names)=>this.names = names);
    }
}
