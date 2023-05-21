import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Observable, Subscription, debounceTime, fromEvent } from 'rxjs';
import { ComponentNameService } from './services/component-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  title = 'Căruceru Ovidiu'; // website title
  activeComponentName = ''; // background text displaying active component name

  // subscriptions
  activeComponentNameSubscription!: Subscription;
  resizeSubscription!: Subscription;

  // access to template variables
  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @ViewChild('backgroundTitle') backgroundTitle!: ElementRef;

  constructor(
    private componentNameService: ComponentNameService,
    private renderer: Renderer2 // modify the DOM in order to set the font size dynamically
    ) { }

  ngOnInit() {
    // subscription to update activeComponentName with the name of the selected component
    this.activeComponentNameSubscription = this.componentNameService.activeComponentName.subscribe(componentName => {
      this.activeComponentName = componentName;
    });

    // subscription to react to window resizing
    this.resizeSubscription = this.createResizeObservable().subscribe();
  }

  ngAfterViewChecked() {
    this.fitBackgroundTitle(); // Call fitBackgroundTitle() when activeComponentName changes
  }
  
  ngOnDestroy() {
    this.activeComponentNameSubscription.unsubscribe();
    this.resizeSubscription.unsubscribe();
  }

  // Check the width of the word and resize the font if necessary to proprely fit the container
  private fitBackgroundTitle() {
    const container = this.mainContainer.nativeElement;
    const containerHeight = container.offsetHeight;
    const containerWidth = container.offsetWidth;
    const maxBackgroundTitleSize = containerHeight * 0.9;

    const backgroundTitleContainer = this.backgroundTitle.nativeElement;

    // Set the font size to match container's width
    const initialFontSize = containerWidth * 1.2;

    // Render the element with the initial font size
    this.renderer.setStyle(backgroundTitleContainer, 'fontSize', `${initialFontSize}px`);

    // Check if the word's width exceeds the container's height
    const titleWidth = backgroundTitleContainer.offsetHeight;

    if (titleWidth > maxBackgroundTitleSize) {
      const updatedFontSize = initialFontSize * (maxBackgroundTitleSize / titleWidth);
      // Re-render the element with updated font size
      this.renderer.setStyle(backgroundTitleContainer, 'fontSize', `${updatedFontSize}px`);
    }
  }

  // react to window resizing
  private createResizeObservable(): Observable<any> {
    return fromEvent(window, 'resize');
  }
}

