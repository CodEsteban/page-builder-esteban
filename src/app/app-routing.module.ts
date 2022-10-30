import { NgModule } from '@angular/core';
import { LifeProjectComponent } from './life-project/life-project/life-project.component';
import { RouterModule, Routes, PreloadingStrategy } from '@angular/router';
import { ThoughtsComponent } from './thoughts/thoughts.component';
import { FourofourComponent } from './fourofour/fourofour.component';

const routes: Routes = [
{
  path: "life/hello",
  component: LifeProjectComponent,
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
    preloadingStrategy: PreloadingStrategy,
},
)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
