import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionComponent } from './product-option.component';

describe('ProductOptionComponent', () => {
  let component: ProductOptionComponent;
  let fixture: ComponentFixture<ProductOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
