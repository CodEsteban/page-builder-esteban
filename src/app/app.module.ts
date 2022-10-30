import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common'
import { ThoughtsModule } from './thoughts/thoughts.module';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { FourofourComponent } from './fourofour/fourofour.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPopupComponent,
    FourofourComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    TransferHttpCacheModule,
    ThoughtsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
