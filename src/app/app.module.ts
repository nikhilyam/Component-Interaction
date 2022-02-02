import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    AstronautComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
