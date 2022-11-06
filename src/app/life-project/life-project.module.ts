import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeProjectComponent } from './life-project/life-project.component';
import { PreambleComponent } from './preamble/preamble.component';
import { BackgroundComponent } from './background/background.component';
import { FillerComponent } from './filler/filler.component';
import { IamComponent } from './iam/iam.component';
import { FamilyComponent } from './family/family.component';
import { WorkComponent } from './work/work.component';



@NgModule({
  declarations: [
    LifeProjectComponent,
    PreambleComponent,
    BackgroundComponent,
    FillerComponent,
    IamComponent,
    FamilyComponent,
    WorkComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LifeProjectComponent
  ]
})
export class LifeProjectModule { }
