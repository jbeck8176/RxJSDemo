import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { NameService } from '../../services/name.service'


@Component({
    selector: 'elementEvents',
    template: require('./elementEvents.component.html')
})
export class ElementEventsComponent {
    directInput: string;
    observableInput: string;

    observableInputChangesSbj$: Subject<string> = new Subject<string>();
    dirtyFlag: boolean = false;
    searchResults: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit() {
        this.observableInputChangesSbj$
            .do(() => {
                this.dirtyFlag = true;
                console.log('input recieved');
            })
            .debounceTime(2000)
            .switchMap((inputValue) => {
                this.observableInput = inputValue;
                return this.nameService.serverNameSearch(this.observableInput);
            })
            .subscribe((searchResults) => {
                this.searchResults = searchResults;
                this.dirtyFlag = false
            });
    }

    directInputChange(value:string): void {
        this.directInput = value;
     }
}









    //import { Subject } from 'rxjs';

    // observableInputChangesSbj$: Subject<string> = new Subject<string>();
    // dirtyFlag: boolean = false;
    // searchResults: string[];

    // ngOnInit() {
    //     this.observableInputChangesSbj$
    //         .do(() => {
    //             this.dirtyFlag = true;
    //             console.log('input recieved');
    //         })
    //         .debounceTime(2000)
    //         .switchMap((inputValue) => {
    //             this.observableInput = inputValue;
    //             return this.nameService.serverNameSearch(this.observableInput);
    //         })
    //         .subscribe((searchResults) => {
    //             this.searchResults = searchResults;
    //             this.dirtyFlag = false
    //         });
    // }