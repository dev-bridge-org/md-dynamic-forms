import {
  ComponentFactoryResolver,
  Directive, Inject,
  Input,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {COMPONENT_SET} from './model/component-set';
import {BaseField} from './model/form/base-field';

@Directive({
  selector: '[mdDynamicField]'
})
export class MdDynamicFieldDirective implements OnInit {
  @Input() field: BaseField;
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
      this.componentSet[this.field.componentOfConfig]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    if (this.field.typeOfFormField === 'group') {
      this.componentRef.instance.group = this.group.get(this.field.name);
    } else {
      this.componentRef.instance.group = this.group;
    }
  }
}
