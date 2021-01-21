import {Component, HostListener, OnInit} from '@angular/core';
import {LayoutConfig} from '../model/layout/layout-config';
import {NGXLogger} from 'ngx-logger';
import {BaseElementComponent} from './base-element.component';
import {FieldLayoutGroup} from '../model/form/group/field-layout-group';

@Component({template: ''})
export class BaseLayoutComponent extends BaseElementComponent<FieldLayoutGroup> implements OnInit {
  layouts: LayoutConfig[] = [];
  activeLayout: LayoutConfig = null;

  constructor(protected logger: NGXLogger) {
    super();
  }

  ngOnInit(): void {
    this.updateActiveLayout(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateActiveLayout(event.target.innerWidth);
  }

  protected updateActiveLayout(containerWidth: number): void {
    if (this.layouts === undefined || this.layouts.length === 0) {
      throw Error('No layouts given');
    }
    let targetLayout: LayoutConfig = null;
    let maxLayout = this.activeLayout;

    this.layouts.forEach(config => {
      if (config.maxWidth !== null && containerWidth < config.maxWidth) {
        targetLayout = config;
      } else if (config.maxWidth === null) {
        maxLayout = config;
      }
    });

    targetLayout = targetLayout || maxLayout;

    if (this.activeLayout?.layoutId !== targetLayout?.layoutId) {
      this.activeLayout = targetLayout;
    }
  }
}
