import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BootstrapComponent} from './bootstrap.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: BootstrapComponent}
    ]),
  ]
})
export class BootstrapModule { }
