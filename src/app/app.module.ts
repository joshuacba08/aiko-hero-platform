import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin, bootstrapTwitter } from '@ng-icons/bootstrap-icons';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroSection } from './components/hero/hero-section.component'
import { DevListComponent } from './components/dev-list/dev-list.component';
import { CardDevComponent } from './components/card-dev/card-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionExampleComponent } from './components/section-example/section-example.component';
import { FooterComponent } from './components/footer/footer.component'
@NgModule({
  declarations: [
    AppComponent,
    DevListComponent,
    HeroSection,
    CardDevComponent,
    SectionExampleComponent,
    FooterComponent,
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
