import * as tslib_1 from "tslib";
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Store
import { CustomRouterSerializer } from './store/router-state-serializer/custom-router-serializer';
import { reducers } from './store/reducers';
import { metaReducers } from './store/meta-reducers';
import { LayoutEffects } from './modules/core/effects/layout.effects';
import { CareersEffects } from '@ns-careers/effects/careers.effects';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@ns-material/material.module';
import { CareersModule } from '@ns-careers/careers.module';
import { SwUpdatesModule } from './modules/swUpdates';
import { CoreModule } from '@ns-core/index';
import { AppComponent } from '@ns-core/containers/app/app.component';
import { GaService } from '@ns-core/services/googleAnalytics/googleAnalytics.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            imports: [
                BrowserModule,
                AppRoutingModule,
                CoreModule,
                CareersModule,
                MaterialModule,
                SwUpdatesModule,
                BrowserAnimationsModule,
                FlexLayoutModule,
                ServiceWorkerModule.register('/nextsilicon.github.io/ngsw-worker.js', { enabled: environment.production }),
                StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
                EffectsModule.forRoot([LayoutEffects, CareersEffects]),
                StoreRouterConnectingModule.forRoot({ serializer: CustomRouterSerializer }),
                !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
            ],
            providers: [GaService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map