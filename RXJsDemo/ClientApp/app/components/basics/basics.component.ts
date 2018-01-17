import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { NameService } from './../../services/name.service';

@Component({
    selector: 'basics',
    template: require('./basics.component.html')
})
export class BasicsComponent {
    names: string[];

    constructor(private nameService: NameService) {
    }

    ngOnInit(){
        this.thisIsGonnaBreak();
    }
    
    thisIsGonnaBreak() {
        this.nameService.getAllNamesNoCache().subscribe(
            (names) => this.names = names,
            (error) => console.log('error', error),
            () => console.log('completed api request')
        );
        
        console.log('this is another test');
    }
}
