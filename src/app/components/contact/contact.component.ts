import { Component, OnInit } from '@angular/core';
import { ComponentDataService } from 'src/app/services/component-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  componentImageUrl = 'assets/images/contact.svg';

  constructor(private componentDataService: ComponentDataService) { }

  ngOnInit() {
    this.componentDataService.updateComponentImageUrl(this.componentImageUrl);
  }
}
