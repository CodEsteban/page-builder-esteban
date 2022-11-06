import { NgModule } from '@angular/core';
import { PreambleComponent } from './life-project/preamble/preamble.component';
import { IamComponent } from './life-project/iam/iam.component';
import { RouterModule, Routes } from '@angular/router';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { FamilyComponent } from './life-project/family/family.component';
import { WorkComponent } from './life-project/work/work.component';

const routes: Routes = [
{
  path: "life/work",
  component: WorkComponent,
},{
  path: "life/preamble",
  component: PreambleComponent,
},{
  path: "life/iam",
  component: IamComponent,
},{
  path: "life/family",
  component: FamilyComponent,
},{
  path: "",
  component: ThoughtsComponent,
},{
  path: "**",
  component: FourofourComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
},
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
