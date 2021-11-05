import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoModule2Component } from './demo-module2.component';

const routes: Routes = [{ path: '', component: DemoModule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoModule2RoutingModule { }
