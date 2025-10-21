import { Routes } from '@angular/router';
import { provideState } from '@ngrx/store';
import { todoListFeature } from './ngrx/store/todo-list/todo-list.selector';

export const routes: Routes = [
    { path: 'signals', loadComponent: () => import('./signal/pages/signal-page/signal-page').then(m => m.SignalPage) },
    { path: 'ngrx', loadComponent: () => import('./ngrx/pages/ngrx-page/ngrx-page').then(m => m.NgrxPage), providers: [
        provideState(todoListFeature)
    ] },
    { path: 'rxjs', loadComponent: () => import('./rxjs/pages/rxjs-page/rxjs-page').then(m => m.RxjsPage) },
    { path: 'routing', loadComponent: () => import('./routing/pages/routing-page/routing-page').then(m => m.RoutingPage) },
];
