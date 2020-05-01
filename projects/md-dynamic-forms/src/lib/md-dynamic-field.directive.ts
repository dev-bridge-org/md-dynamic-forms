import {ComponentFactoryResolver, Directive, Inject, Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '@lib/model/field-config.interface';
import {COMPONENT_SET} from '@lib/model/component-set';

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
    if (this.field.formType === 'group') {
      this.componentRef.instance.group = this.group.get(this.field.name);
    } else {
      this.componentRef.instance.group = this.group;
    }
  }
}
