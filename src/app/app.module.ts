import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule} from '@angular/material'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    HeaderBarComponent,
    HeaderMenuComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
