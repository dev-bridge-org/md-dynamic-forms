import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClarityComponent} from './clarity.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [ClarityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ClarityComponent}
    ]),
  ]
})
export class ClarityModule { }
