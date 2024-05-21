import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { PrizeCardComponent } from '../shared/prize-card/prize-card.component';
import { ProductsComponent } from '../products/products.component';
import { SliderComponent } from '../slider/slider.component';
import { MatDialog } from '@angular/material/dialog';
import { MatVideoDialogComponent } from '../shared/mat-video-dialog/mat-video-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ICardData } from '../shared/models/ICardData';
import { RedButtonComponent } from '../shared/red-button/red-button.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ProductsService } from '../services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    PrizeCardComponent,
    ProductsComponent,
    SliderComponent,
    NgForOf,
    NgIf,
    RedButtonComponent,
    TranslateModule,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent implements OnInit {

  constructor(public dialog: MatDialog, private translate: TranslateService,  private productsService: ProductsService
  ) {
    this.translate.setDefaultLang('en');
  }

  public route: ActivatedRoute = inject(ActivatedRoute);
  public router: Router = inject(Router);

  prizeCards: ICardData[] = [];

  ngOnInit() {
    this.initializePrizeCards();
    const videoRouteParam = this.route.snapshot.paramMap.get('video');
    if (videoRouteParam === 'play-video') {
      this.showVideo();
    }

    this.productsService.lang$.subscribe(lang => {
      this.translate.setDefaultLang(lang);
    });
  }

  showVideo() {
    const dialogRef = this.dialog.open(MatVideoDialogComponent, {
      width: '600px',
      data: { name: 'Angular' },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.route.params.forEach((el) => {
        this.router.navigateByUrl(
          el['lang'] + '/' + el['product'] + '/' + 'played'
        );
      });
    });
  }

  private getRandomCoinCount(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  private initializePrizeCards() {
    const firstCardCoinCount = this.getRandomCoinCount(10);
    const secondCardCoinCount = this.getRandomCoinCount(10);
    const thirdCardCoinCount = this.getRandomCoinCount(5);

    this.prizeCards = [
      {
        imagePath: '/assets/images/car.png',
        background:
          'linear-gradient(to top right, rgba(156, 14, 7, 1), rgba(78, 7, 4, 0.5))',
        coinPath: '/assets/svgs/bmw-full.svg',
        coinCount: firstCardCoinCount,
        emptyCoinPath: '/assets/svgs/bmw-empty.svg',
        emptyCoinCount: 10 - firstCardCoinCount,
        icon: '/assets/images/m4.png',
        prizeAmount: null,
        text: 'რაღაც გაუთვალისწინებელი ტექსტი',
      },
      {
        background:
          'linear-gradient(to left, rgb(179 147 81 / 90%), rgba(47, 35, 19, 0.9))',
        coinPath: '/assets/svgs/gold-gel.svg',
        coinCount: secondCardCoinCount,
        emptyCoinPath: '/assets/svgs/gel-empty.svg',
        emptyCoinCount: 10 - secondCardCoinCount,
        icon: null,
        prizeAmount: '/assets/images/Rectangle.png',
        text: 'გათამაშდა დღეს 23:25-ზე',
      },
      {
        background:
          'linear-gradient(to left, rgb(86 96 120 / 90%), rgba(38, 41, 51, 0.9))',
        coinPath: '/assets/svgs/silver-gel.svg',
        coinCount: thirdCardCoinCount,
        emptyCoinPath: '/assets/svgs/gel-empty.svg',
        emptyCoinCount: 5 - thirdCardCoinCount,
        icon: null,
        prizeAmount: '/assets/images/Rectangle (1).png',
        text: 'თამაშდება 4 იანვრამდე',
        hiddenCredentials: true,
      },
    ];
  }
}
