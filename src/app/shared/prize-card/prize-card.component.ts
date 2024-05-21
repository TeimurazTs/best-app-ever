import {Component, Input } from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import { ICardData } from '../models/ICardData';

@Component({
  selector: 'app-prize-card',
  standalone: true,
  imports: [
    NgStyle,
    NgOptimizedImage,
    NgForOf,
  ],
  templateUrl: './prize-card.component.html',
  styleUrl: './prize-card.component.css'
})
export class PrizeCardComponent {
  @Input() cardData!: ICardData;
}
