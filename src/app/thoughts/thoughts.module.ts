import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxThoughtComponent } from './box-thought/box-thought.component';
import { AddThoughtComponent } from './add-thought/add-thought.component';
import { ThoughtsComponent } from './thoughts.component';
import { NewThoughtScreenComponent } from './new-thought-screen/new-thought-screen.component';
import { TransferHttpCacheModule } from '@nguniversal/common'
import { BoxDetailsComponent } from './box-details/box-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GridThoughtsComponent } from './grid-thoughts/grid-thoughts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BoxDetailsComponent,
    NavbarComponent,
    GridThoughtsComponent,
    BoxThoughtComponent,
    ThoughtsComponent,
    AddThoughtComponent,
    NewThoughtScreenComponent,
  ],
  imports: [
    TransferHttpCacheModule,
    CommonModule,
    FormsModule,
  ]
})
export class ThoughtsModule { }
