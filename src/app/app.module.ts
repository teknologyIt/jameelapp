import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SliderModule } from 'angular-image-slider';
import { InscriptionComponent } from './inscription/inscription.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContainerComponent,
    HeaderComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
