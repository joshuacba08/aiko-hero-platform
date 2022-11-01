import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapTwitter } from '@ng-icons/bootstrap-icons';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { CardDevComponent } from './components/card-dev/card-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    DevListComponent,
    CardDevComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgIconsModule.withIcons({
      bootstrapGithub, bootstrapLinkedin, bootstrapTwitter }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
