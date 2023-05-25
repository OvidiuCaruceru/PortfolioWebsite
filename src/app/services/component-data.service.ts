import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentDataService {

  private componentImageUrl = new Subject<string>();

  get activeComponentImageUrl() {
    return this.componentImageUrl.asObservable(); // hide the next() method and expose only the subscribe() method so consumers can only receive the values emitted by the componentName observable, but cannot emit their own values.
  }

  updateComponentImageUrl(url: string) {
    this.componentImageUrl.next(url);
  }

}
