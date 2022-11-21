import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import {
  bootstrapGithub,
  bootstrapLinkedin,
  bootstrapTwitter,
} from '@ng-icons/bootstrap-icons';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroSection } from './components/hero/hero-section.component';
import { DevListComponent } from './components/dev-list/dev-list.component';
import { CardDevComponent } from './components/card-dev/card-dev.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesComponent } from './components/features/features.component';
import { SectionExampleComponent } from './components/section-example/section-example.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DocComponent } from './documents/pages/doc/doc.component';
import { TeamComponent } from './pages/team/team.component';
import { ExamplesComponent } from './pages/examples/examples.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    DevListComponent,
    HeroSection,
    FeaturesComponent,
    CardDevComponent,
    SectionExampleComponent,
    FooterComponent,
    HomeComponent,
    DocComponent,
    TeamComponent,
    ExamplesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgIconsModule.withIcons({
      bootstrapGithub,
      bootstrapLinkedin,
      bootstrapTwitter,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
