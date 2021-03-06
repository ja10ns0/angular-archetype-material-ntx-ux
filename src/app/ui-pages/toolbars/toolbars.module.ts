import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ToolbarsDocComponent } from './documentation/toolbars-doc.component';
import { ToolbarsExamplesComponent } from './examples/toolbar-examples.component';
import { ToolbarsRoutingModule } from './toolbars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ToolbarsRoutingModule
  ],
  declarations: [
      ToolbarsExamplesComponent,
      ToolbarsDocComponent
    ]
})
export class ToolbarsModule { }
