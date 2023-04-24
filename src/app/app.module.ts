import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store'

import { AppRoutingModule } from '@/app-routing.module'
import { AppComponent } from '@/app.component'
import { AuthModule } from '@/auth/auth.module'
import { environment } from 'src/environments/environment'
import { GlobalFeedModule } from '@/globalFeed/globalFeed.module'
import { YourFeedModule } from '@/yourFeed/yourFeed.module'
import { TagFeedModule } from '@/tagFeed/tagFeed.module'
import { ArticleModule } from '@/article/article.module'
import { TopBarModule } from '@shared/modules/topBar/topBar.module'
import { AuthInterceptor } from '@shared/services/authinterceptor.service'
import { PersistanceService } from '@shared/services/persistance.service'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
