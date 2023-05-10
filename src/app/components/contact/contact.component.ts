import { Component, OnInit } from '@angular/core';
import { ComponentNameService } from 'src/app/services/component-name.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  componentName = 'Contact';

  constructor(private componentNameService: ComponentNameService) { }

  ngOnInit() {
    this.componentNameService.updateComponentName(this.componentName);
  }
}
