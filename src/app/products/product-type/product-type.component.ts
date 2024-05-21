import {Component, inject, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {ProductProgressComponent} from "../product-progress/product-progress.component";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-type',
  standalone: true,
  imports: [
    ProductProgressComponent,
    NgClass,
    NgOptimizedImage
  ],
  templateUrl: './product-type.component.html',
  styleUrl: './product-type.component.css'
})
export class ProductTypeComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);

  @Input() imagePath!: string;
  @Input() title!: string;
  @Input() productType!: string;
  @Input() id!: number;

  public currentProductType: WritableSignal<string> = signal('');
  public isSelected: WritableSignal<boolean> = signal(false);

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentProductType.set(params['product']);
      if(this.currentProductType() === this.productType) {
        this.isSelected.set(true);
      } else {
        this.isSelected.set(false);
      }
    });
  }

}
