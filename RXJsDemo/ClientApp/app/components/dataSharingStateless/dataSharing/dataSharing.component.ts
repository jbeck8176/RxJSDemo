import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { NameService } from './../../../services/name.service';

@Component({
    selector: 'dataSharingStatless',
    template: require('./dataSharing.component.html')
})
export class DataSharingComponentStatless {
    names: string[];
    namesChangeSbj$: Subject<string[]> = new Subject<string[]>();
    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.nameService.names.subscribe((names) => this.names = names);

        this.namesChangeSbj$
            .debounceTime(1000)
            .subscribe(
                (names) => this.nameService.updateNames(names)
            );
    }

    namesChanged(names: string[]):void {
        this.namesChangeSbj$.next(names);
    }
}
