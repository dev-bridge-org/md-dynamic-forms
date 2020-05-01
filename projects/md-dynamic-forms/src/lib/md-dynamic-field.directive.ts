import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive, Inject,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from './model/field-config.interface';
import {COMPONENT_SET} from './model/component-set';

@Directive({
  selector: '[mdDynamicField]'
})
export class MdDynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    @Inject(COMPONENT_SET) public componentSet,
  ) {
  }

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      this.componentSet[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}
