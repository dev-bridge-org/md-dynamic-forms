import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MdDynamicFormsModule} from 'md-dynamic-forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDynamicFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
