import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOptionSectionComponent } from './product-option-section.component';

describe('ProductOptionGroupComponent', () => {
  let component: ProductOptionSectionComponent;
  let fixture: ComponentFixture<ProductOptionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOptionSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOptionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
