import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeroSection } from './components/hero/hero-section.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroSection,
  ],
  imports: [
    BrowserModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
