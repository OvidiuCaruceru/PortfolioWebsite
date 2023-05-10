import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ComponentNameService {

  private componentName = new BehaviorSubject<string>('');

  get activeComponentName() {
    return this.componentName.asObservable(); // since we want to expose the read-only nature of the componentName observable to consumers, we use the asObservable() method to hide the next() method and expose only the subscribe() method. This way, consumers can only receive the values emitted by the componentName observable, but cannot emit their own values.
  }

  updateComponentName(name: string) {
    this.componentName.next(name);
  }
}
