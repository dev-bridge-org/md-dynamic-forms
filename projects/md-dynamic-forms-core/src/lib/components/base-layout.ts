import {HostListener, OnInit} from '@angular/core';
import {LayoutConfig} from '../model/layout/layout-config';
import {NGXLogger} from 'ngx-logger';

export class BaseLayout implements OnInit{
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
    if (this.layouts.length > 0) {
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
}
