import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule
  ],
  declarations: [SampleComponent]
})
export class DemoModule { }
