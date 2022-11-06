import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    HeaderComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
