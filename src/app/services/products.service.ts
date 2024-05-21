import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private langSubject = new BehaviorSubject<string>('ka');
  lang$ = this.langSubject.asObservable();

  constructor() { }

  public getProductsData(productType: string) {
    return new Observable();
  }

  setLanguage(lang: string) {
    this.langSubject.next(lang);
  }
}
