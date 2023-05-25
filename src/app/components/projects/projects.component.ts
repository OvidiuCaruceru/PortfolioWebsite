import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/services/component-data.service';
import { Project } from '../../models/project.model'
import { projects } from 'src/app/data/projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  componentImageUrl = '../assets/images/projects.svg';
  projects: Project[] = projects;

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDataService.updateComponentImageUrl(this.componentImageUrl);
  }

  toggleDetails(project: Project) {
    project.isActive = !project.isActive;
  }

}
