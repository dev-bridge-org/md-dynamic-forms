import {AbstractControl, FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {TestService} from './test.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class CustomValidators {
  public static test(group: FormGroup) {
    const control = group.get('dob') as FormControl;

    if (!control) {
      return null;
    }
    control.setErrors({test: true});
    return null;
  }

  public static asyncTest(testService: TestService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return testService.test().pipe(
        map(
          value => {
            return value ? { asyncTest: true} : null;
          }
        )
      );
    };
  }
}
