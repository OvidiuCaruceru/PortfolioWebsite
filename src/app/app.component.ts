import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ComponentNameService } from './services/component-name.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Căruceru Ovidiu';

  activeComponentName = '';

  constructor(
    private componentNameService: ComponentNameService,
    private cdRef: ChangeDetectorRef // Angular is detecting a change in the value of componentName that has occurred after the view has been checked, and is throwing an error without this additional change detection
    ) { }

  ngOnInit() {
    this.componentNameService.activeComponentName.subscribe(componentName => {
      this.activeComponentName = componentName;
      this.cdRef.detectChanges();
    });
  }

}
