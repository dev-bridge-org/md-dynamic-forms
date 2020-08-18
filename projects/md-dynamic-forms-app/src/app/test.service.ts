import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public test() {
    return of(true);
  }

  public getGenderingOptions() {
    return of(['Male', 'Female', 'Divers']);
  }
}
