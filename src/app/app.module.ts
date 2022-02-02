import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AstronautComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
