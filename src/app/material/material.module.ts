import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
