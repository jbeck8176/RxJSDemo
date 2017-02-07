import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'dataSharingInnerStatless',
    template: require('./dataSharingInner.component.html')
})
export class DataSharingInnerComponentStatless {
    @Input() title: string;
    @Input() names: string[]
    @Output() nameChanged$: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor() {
    }

    addName(name: string): void {
        this.names = [...this.names, name];
    }

    save(): void {
        this.nameChanged$.next(this.names);
    }
}
