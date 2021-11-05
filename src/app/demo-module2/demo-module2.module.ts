import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoModule2RoutingModule } from './demo-module2-routing.module';
import { DemoModule2Component } from './demo-module2.component';


@NgModule({
  declarations: [
    DemoModule2Component
  ],
  imports: [
    CommonModule,
    DemoModule2RoutingModule
  ]
})
export class DemoModule2Module { }
