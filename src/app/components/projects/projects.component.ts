import { Component, OnInit } from '@angular/core';
import { ComponentNameService } from 'src/app/services/component-name.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  componentName = 'Projects';

  constructor(private componentNameService: ComponentNameService) { }

  ngOnInit() {
    this.componentNameService.updateComponentName(this.componentName);
  }
}
