import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBlocklyModule } from 'ngx-blockly';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBlocklyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
