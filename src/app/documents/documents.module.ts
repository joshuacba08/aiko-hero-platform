import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedComponent } from './pages/get-started/get-started.component';
import { CustomizedComponent } from './pages/customized/customized.component';
import { DocRoutingModule } from './doc-routing.module';
import { MethodsComponent } from './pages/methods/methods.component';


@NgModule({
  declarations: [
    GetStartedComponent,
    CustomizedComponent,
    MethodsComponent
  ],
  imports: [
    CommonModule,
    DocRoutingModule,
  ]
})
export class DocumentsModule { }
