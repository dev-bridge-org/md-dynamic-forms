import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {MdDynamicFormsModule} from 'md-dynamic-forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDynamicFormsModule,
    LoggerModule.forRoot({serverLoggingUrl: '', serverLogLevel: NgxLoggerLevel.OFF, level: NgxLoggerLevel.DEBUG})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
