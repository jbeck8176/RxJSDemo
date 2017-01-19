import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'unittesting',
    template: require('./unittesting.component.html')
})
export class UnittestingComponent {
    names: string[];

    constructor() {
    }

    ngOnInit() {
    }
}
