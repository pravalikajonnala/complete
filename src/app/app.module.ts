import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Branch1Component } from './branch1/branch1.component';
import { Branch2Component } from './branch2/branch2.component';

@NgModule({
  declarations: [
    AppComponent,
    Branch1Component,
    Branch2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
