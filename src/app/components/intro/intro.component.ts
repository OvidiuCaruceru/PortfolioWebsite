import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/services/component-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  componentImageUrl = '../assets/images/intro.svg';

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDataService.updateComponentImageUrl(this.componentImageUrl);
  }
}
