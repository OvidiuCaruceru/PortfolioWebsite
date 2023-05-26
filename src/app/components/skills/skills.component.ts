import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/services/component-data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  componentImageUrl = 'assets/images/skills.svg';

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDataService.updateComponentImageUrl(this.componentImageUrl);
  }
}
