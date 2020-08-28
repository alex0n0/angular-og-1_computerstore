import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionGroupComponent } from './product-option-group.component';

describe('ProductOptionGroupComponent', () => {
  let component: ProductOptionGroupComponent;
  let fixture: ComponentFixture<ProductOptionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
