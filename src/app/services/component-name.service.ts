import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentNameService {

  private componentName = new Subject<string>();

  get activeComponentName() {
    return this.componentName.asObservable(); // hide the next() method and expose only the subscribe() method so consumers can only receive the values emitted by the componentName observable, but cannot emit their own values.
  }

  updateComponentName(name: string) {
    this.componentName.next(name);
  }

}
