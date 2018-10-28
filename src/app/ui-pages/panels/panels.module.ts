import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PanelsDocComponent } from './documentation/panels-doc.component';
import { PanelsExamplesComponent } from './examples/panels-examples.component';
import { PanelsRoutingModule } from './panels-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PanelsRoutingModule
  ],
  declarations: [
      PanelsDocComponent,
      PanelsExamplesComponent
    ]
})
export class PanelsModule { }
