import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'signals', loadComponent: () => import('./signal/pages/signal-page/signal-page').then(m => m.SignalPage) },
    { path: 'ngrx', loadComponent: () => import('./ngrx/pages/ngrx-page/ngrx-page').then(m => m.NgrxPage) },
    { path: 'rxjs', loadComponent: () => import('./rxjs/pages/rxjs-page/rxjs-page').then(m => m.RxjsPage) },
    { path: 'routing', loadComponent: () => import('./routing/pages/routing-page/routing-page').then(m => m.RoutingPage) },
];
