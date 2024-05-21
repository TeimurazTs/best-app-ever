import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductProgressComponent } from './product-progress.component';

describe('ProductProgressComponent', () => {
  let component: ProductProgressComponent;
  let fixture: ComponentFixture<ProductProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
