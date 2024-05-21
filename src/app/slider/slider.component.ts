import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatCard, MatCardModule} from '@angular/material/card';
import { SlideComponent } from "./slide/slide.component";
import { trigger, transition, style, animate } from '@angular/animations';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatIconButton,
    SlideComponent,
    NgForOf
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('500ms ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
  export class SliderComponent {
  currentIndex = 0; // Track the index of the currently displayed card
  currentIndexPlus: number = 1;
  public cardList: any = [
    {name: 'სამოთხე', path: '/assets/images/redcars.jpg', link: 'https://wwww.facebook.com'},
    {name: 'ჯოჯოხეთი', path: '/assets/images/redcars.jpg', link: 'https://wwww.facebook.com'},
    {name: 'პურგატორია', path: '/assets/images/redcars.jpg', link: 'https://wwww.facebook.com'},
    {name: 'ზვანი', path: '/assets/images/redcars.jpg', link: 'https://wwww.facebook.com'},
    {name: 'გლადნი', path: '/assets/images/redcars.jpg', link: 'https://wwww.facebook.com'}
  ]
  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentIndexPlus--;
    }
  }

  slideRight() {
    // Assuming you have an array of cards 'cardList'
    if (this.currentIndex < this.cardList.length - 1) {
      this.currentIndex++;
      this.currentIndexPlus++
    }
  }
}

