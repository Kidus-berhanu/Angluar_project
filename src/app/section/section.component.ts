import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() title: any;
  @Input() body: any;
  @Input() color: any;
  @Output() sectionClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    this.sectionClicked.emit(this.color);
  }
}