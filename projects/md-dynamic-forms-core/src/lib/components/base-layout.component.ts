import {Component, HostListener, OnInit} from '@angular/core';
import {LayoutConfig} from '../model/layout/layout-config';
import {NGXLogger} from 'ngx-logger';

@Component({template: ''})
export class BaseLayoutComponent implements OnInit {
  layouts: LayoutConfig[] = [];
  activeLayout: LayoutConfig = null;

  constructor(protected logger: NGXLogger) {}

  ngOnInit(): void {
    this.updateActiveLayout(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.updateActiveLayout(event.target.innerWidth);
  }

  protected updateActiveLayout(containerWidth: number): void {
    if (this.layouts.length === 0) {
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
