import {Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {SlideComponent } from "./slide/slide.component";
import {trigger, transition, style, animate } from '@angular/animations';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    MatCard,
    MatIcon,
    MatIconButton,
    SlideComponent,
    NgForOf,
    NgClass
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
  currentIndex = 0;
  currentIndexPlus: number = 1;
  public cardList: any = [
    {path: '/assets/images/slidergames.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidercar.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidergames.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidercar.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidergames.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidercar.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidergames.png', link: 'https://wwww.facebook.com'},
    {path: '/assets/images/slidercar.png', link: 'https://wwww.facebook.com'}
  ]
  slideLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.currentIndexPlus--;
    }
  }

  slideRight() {
    if (this.currentIndex < this.cardList.length - 2) {
      this.currentIndex++;
      this.currentIndexPlus++
    }
  }
}

