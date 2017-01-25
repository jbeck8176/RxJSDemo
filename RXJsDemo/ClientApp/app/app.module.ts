import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'

import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PromiseVsObservableComponent } from './components/promiseVsObservable/promiseVsObservable.component';
import { BasicsComponent } from './components/basics/basics.component';
import { CachingComponent } from './components/caching/caching.component';
import { DataSharingComponent } from './components/dataSharing/dataSharing.component';
import { DataSharingInnerComponent } from './components/dataSharingInner/dataSharingInner.component';
import { ElementEventsComponent } from './components/elementEvents/elementEvents.component';
import { UnittestingComponent } from './components/unittesting/unittesting.component';


import { NameService } from './services/name.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        PromiseVsObservableComponent,
        BasicsComponent,
        CachingComponent,
        DataSharingComponent,
        DataSharingInnerComponent,
        ElementEventsComponent,
        UnittestingComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'promisevsobservable', component: PromiseVsObservableComponent },
            { path: 'basics', component: BasicsComponent },
            { path: 'caching', component: CachingComponent },
            { path: 'datasharing', component: DataSharingComponent },
            { path: 'elementevents', component: ElementEventsComponent },
            { path: 'unittesting', component: UnittestingComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        NameService
    ]
})
export class AppModule {
}
