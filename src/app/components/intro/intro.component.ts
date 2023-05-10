import { Component, OnInit } from '@angular/core';
import { ComponentNameService } from 'src/app/services/component-name.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  componentName = 'Intro';

  constructor(private componentNameService: ComponentNameService) { }

  ngOnInit() {
    this.componentNameService.updateComponentName(this.componentName);
  }
}
