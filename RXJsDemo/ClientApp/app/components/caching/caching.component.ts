import { Component, OnInit } from '@angular/core';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'caching',
    template: require('./caching.component.html')
})
export class CachingComponent {
    names: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.nameService.names.subscribe((names) => this.names = names);
    }

    reloadNames() {
        this.names = [];
        this.nameService.names.subscribe(
            (names) => {
                this.names = names;
                alert('names reloaded from cache');
            }
        )
    }
}
