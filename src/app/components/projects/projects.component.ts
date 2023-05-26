import { Component, HostListener, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/services/component-data.service';
import { Project } from '../../models/project.model'
import { projects } from 'src/app/data/projects-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  componentImageUrl = 'assets/images/projects.svg';
  projects: Project[] = projects;
  isBigScreen!: boolean;

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDataService.updateComponentImageUrl(this.componentImageUrl);
    this.isBigScreen = window.innerWidth >= 550;
  }

  toggleDetails(project: Project) {
    project.isActive = !project.isActive;
  }

  // listen for window resizing in order to know if mobile or desktop layout is used
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isBigScreen = window.innerWidth >= 550;
  }
}
