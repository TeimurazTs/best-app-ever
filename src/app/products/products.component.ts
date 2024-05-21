import {Component, WritableSignal, signal, inject} from '@angular/core';
import {ProductProgressComponent} from "./product-progress/product-progress.component";
import {ProductTypeComponent} from "./product-type/product-type.component";
import {IProduct} from "../shared/models/product";
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ProductProgressComponent,
    ProductTypeComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

  public progress: WritableSignal<number> = signal(0);

  public products: IProduct[] = [
    {title: 'სლოტი', imagePath: 'assets/svgs/slot1.svg', productType: 'slots', id: 1, progress: 6},
    {title: 'მინი თამაშები', imagePath: 'assets/svgs/slot2.svg', productType: 'ming-games', id: 2, progress: 1},
    {title: 'p2p', imagePath: 'assets/svgs/slot3.svg', productType: 'p2p', id: 3, progress: 4},
    {title: 'კაზინო', imagePath: 'assets/svgs/slot4.svg', productType: 'casino', id: 4, progress: 8},
    {title: 'პოკერი', imagePath: 'assets/svgs/slot5.svg', productType: 'poker', id: 5, progress: 2}
  ]

  onProductClick(product: string, progress: number) {
    this.progress.set(progress);
    this.route.params.forEach((el) => {
      this.router.navigateByUrl(el['lang']+ '/' + product + '/' + el['video'])
    })
  }
}
