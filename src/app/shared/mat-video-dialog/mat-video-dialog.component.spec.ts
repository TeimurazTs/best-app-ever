import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVideoDialogComponent } from './mat-video-dialog.component';

describe('MatVideoDialogComponent', () => {
  let component: MatVideoDialogComponent;
  let fixture: ComponentFixture<MatVideoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatVideoDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
