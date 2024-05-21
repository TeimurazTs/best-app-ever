import {Component, Input, ViewChild} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-product-progress',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatIconModule,
    NgClass,
    NgForOf,
    NgIf,
    MatTooltip,
  ],
  templateUrl: './product-progress.component.html',
  styleUrl: './product-progress.component.css'
})
export class ProductProgressComponent {
  @Input() progress!: number;
  checks: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  tooltipVisible: boolean = false;

  @ViewChild('tooltip') tooltip!: MatTooltip;

  constructor() { }

  toggleTooltip() {

    this.tooltipVisible = !this.tooltipVisible;
    if (this.tooltipVisible) {
      this.tooltip.show();
    } else {
      this.tooltip.hide();
    }
  }
}
