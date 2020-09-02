import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import {HttpClientModule} from '@angular/common/http';
import {CustomFormSetModule} from './custom-form-set/custom-form-set.module';
import {MdDynamicFormsCoreModule} from 'md-dynamic-forms-core';
import {MdDynamicFormsMaterialModule} from 'md-dynamic-forms-material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDynamicFormsCoreModule,
    MdDynamicFormsMaterialModule,
    HttpClientModule,
    LoggerModule.forRoot({level: NgxLoggerLevel.DEBUG})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
