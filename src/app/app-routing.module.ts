import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { LosangelesComponent } from './losangeles/losangeles.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { WashingtonComponent } from './washington/washington.component';
import { LocalComponent } from './local/local.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LocalComponent,
    children: []
  },
  {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent,
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent,
    children: []
  },
  {
    path: 'losangeles',
    pathMatch: 'full',
    component: LosangelesComponent,
    children: []
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent,
    children: []
  },
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent,
    children: []
  },
  {
    path: 'washington',
    pathMatch: 'full',
    component: WashingtonComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
