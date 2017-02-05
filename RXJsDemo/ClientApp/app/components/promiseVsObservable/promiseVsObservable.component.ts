import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'promisevsobservable',
    template: require('./promiseVsObservable.component.html')
})
export class PromiseVsObservableComponent {
    promiseTest: Promise<number>;
    observableTest: Observable<number>;

    constructor() {
    }

    promiseVsObservable(): void {
        this.promiseTest = new Promise<number>((resolve) => {
            setTimeout(function() {
                console.log('promise timeout hit');
                resolve(99);
            }, 1000);

            console.log('promise started');
        });

        this.observableTest = Observable.create((observer) => {
            let id = setTimeout(function () {
                console.log('Observable timeout hit');
                observer.next(11);
            }, 1000);

            console.log('observable started');

            return () => {
                clearTimeout(id)
            };
        });
    }

    then(): void {
        this.promiseTest.then((x)=>console.log(x))
    }

    subscribe(): void {
        let subsctiption = this.observableTest.subscribe(x => console.log(x));

        // setTimeout(function() {
        //     subsctiption.unsubscribe();
        // }, 500);

    }
}
