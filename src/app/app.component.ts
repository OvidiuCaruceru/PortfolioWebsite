import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentDataService } from './services/component-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'Căruceru Ovidiu'; // website title
  componentImageUrl = ''; // url for image with component name

  // subscriptions
  activeComponentDataSubscription!: Subscription;

  constructor(
    private componentDataService: ComponentDataService,
    ) { }

  ngOnInit() {
    // subscription to update componentImageUrl with the image url of the active component
    this.activeComponentDataSubscription = this.componentDataService.activeComponentImageUrl.subscribe(url => {
      this.componentImageUrl = url; // get active component image url
    });
  }
  
  ngOnDestroy() {
    this.activeComponentDataSubscription.unsubscribe();
  }
}

