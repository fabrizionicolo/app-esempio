import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { ListaProdottiComponent } from './components/lista-prodotti/lista-prodotti.component';
import { DettaglioProdottoComponent } from './components/dettaglio-prodotto/dettaglio-prodotto.component';
import { HoverCardDirective } from './directives/hover-card.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileService } from './services/profile.service';
import { connectionFactory } from './services/factory/connection.factory';
import { ConnectionDbService } from './services/connection-db.service';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorService } from './interpectors/loader-interceptor.service';
import { CacheInterceptorService } from './interpectors/cache-interceptor.service';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ListaProdottiComponent,
    DettaglioProdottoComponent,
    HoverCardDirective,
    NotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, // sta solo nel modulo principale, e ingloba anche il CommonModule
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    { provide: ProfileService, useFactory: connectionFactory, deps: [ConnectionDbService] },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
