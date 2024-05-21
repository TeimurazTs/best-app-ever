import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() background: any;

  private langSubject = new BehaviorSubject<string>('ka');
  lang$ = this.langSubject.asObservable();

  constructor(private router: Router, private productsService: ProductsService) {}

  toEng() {
    this.productsService.setLanguage('en');
    this.updateRoute('en');
  }

  toGeo() {
    this.productsService.setLanguage('ka');
    this.updateRoute('ka');
  }

  private updateRoute(lang: string) {
    const currentRoute = this.router.url.split('/');
    if (currentRoute.length > 1) {
      currentRoute[1] = lang;
      this.router.navigate(currentRoute);
    }
  }
}
