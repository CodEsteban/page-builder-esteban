import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThoughtsModule } from './thoughts/thoughts.module';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { FourofourComponent } from './fourofour/fourofour.component';
import { LifeProjectModule } from './life-project/life-project.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPopupComponent,
    FourofourComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
    AppRoutingModule,
    ThoughtsModule,
    LifeProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
