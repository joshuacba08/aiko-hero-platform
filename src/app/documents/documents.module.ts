import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

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
    MarkdownModule.forRoot(),
  ]
})
export class DocumentsModule { }
