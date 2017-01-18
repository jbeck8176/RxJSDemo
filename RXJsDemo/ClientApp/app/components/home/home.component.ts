import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    names: string[];
    namesSearch: string[];

    constructor() {
    }
}
