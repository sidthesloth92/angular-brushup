import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/store/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
        provide: 'API_KEY',
        useValue: "cc11f98d25d37fbbb6686899d903e5828a81b21a23317267245915aae1c2fe61"
    },
    provideHttpClient(withInterceptors([
        (req, next) => {
            const apiKey = "cc11f98d25d37fbbb6686899d903e5828a81b21a23317267245915aae1c2fe61";
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${apiKey}`
                }
            });
            return next(authReq);
        }
    ])),
    provideStore({ count: counterReducer }),
]
};
