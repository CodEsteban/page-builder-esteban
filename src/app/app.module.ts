import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxDetailsComponent } from './box-details/box-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridThoughtsComponent } from './grid-thoughts/grid-thoughts.component';
import { FormsModule } from '@angular/forms';
import { TransferHttpCacheModule } from '@nguniversal/common'
import { BoxThoughtComponent } from './box-thought/box-thought.component';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { AddThoughtComponent } from './add-thought/add-thought.component';
import { NewThoughtScreenComponent } from './new-thought-screen/new-thought-screen.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import {AngularFittextModule} from 'angular-fittext';

@NgModule({
  declarations: [
    AppComponent,
    BoxDetailsComponent,
    NavbarComponent,
    GridThoughtsComponent,
    BoxThoughtComponent,
    ThoughtsComponent,
    AddThoughtComponent,
    NewThoughtScreenComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    TransferHttpCacheModule,
    AngularFittextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
