import { Component, OnInit } from '@angular/core';
import { ComponentNameService } from 'src/app/services/component-name.service';
import { Project } from '../../models/project.model'
import { projects } from 'src/app/data/projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  componentName = 'Projects';
  projects: Project[] = projects;

  constructor(private componentNameService: ComponentNameService) { }

  ngOnInit() {
    this.componentNameService.updateComponentName(this.componentName);
  }

  toggleDetails(project: Project) {
    project.isActive = !project.isActive;
  }

}
