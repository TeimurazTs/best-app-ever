import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  @Input() link!: string;
  @Input() path!: string;
}
