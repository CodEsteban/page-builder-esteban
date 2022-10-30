import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeProjectComponent } from './life-project/life-project.component';



@NgModule({
  declarations: [
    LifeProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LifeProjectComponent
  ]
})
export class LifeProjectModule { }
