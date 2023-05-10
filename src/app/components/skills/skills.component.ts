import { Component, OnInit } from '@angular/core';
import { ComponentNameService } from 'src/app/services/component-name.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  componentName = 'Skills';

  constructor(private componentNameService: ComponentNameService) { }

  ngOnInit() {
    this.componentNameService.updateComponentName(this.componentName);
  }
}
