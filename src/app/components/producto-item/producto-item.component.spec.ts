import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItemComponent } from './producto-item.component';

describe('ProductoItemComponent', () => {
  let component: ProductoItemComponent;
  let fixture: ComponentFixture<ProductoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductoItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
