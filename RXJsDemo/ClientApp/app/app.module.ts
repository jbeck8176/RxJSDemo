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
import { DataSharingInnerDiffComponent } from './components/dataSharingInnerDiff/dataSharingInnerDiff.component';
import { DataSharingComponentStatless } from './components/dataSharingStateless/dataSharing/dataSharing.component';
import { DataSharingInnerComponentStatless } from './components/dataSharingStateless/dataSharingInner/dataSharingInner.component';
import { DataSharingInnerDiffComponentStatless } from './components/dataSharingStateless/dataSharingInnerDiff/dataSharingInnerDiff.component';
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
        DataSharingInnerDiffComponent,
        DataSharingComponentStatless,
        DataSharingInnerComponentStatless,
        DataSharingInnerDiffComponentStatless,
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
            { path: 'datasharingstatless', component: DataSharingComponentStatless },
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
