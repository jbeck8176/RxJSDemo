import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'elementEvents',
    template: require('./elementEvents.component.html')
})
export class ElementEventsComponent {
    directInput: string;
    observableInput: string;

    constructor() {
    }

    directInputChange(value:string): void {
        this.directInput = value;
     }
}









    //import { Subject } from 'rxjs';

    // observableInputChangesSbj$: Subject<string> = new Subject<string>();
    // dirtyFlag: boolean = false;

//      ngOnInit() {
//         this.observableInputChangesSbj$
//             .do(() => {
//                 this.dirtyFlag = true;
//                 console.log('input recieved');
//             })
//             .debounceTime(3000)
//             .map((inputValue) => {
//                 this.observableInput = inputValue;
//             })
//             .subscribe(() => {
//                 this.dirtyFlag = false;
//             }
//         );
//     }