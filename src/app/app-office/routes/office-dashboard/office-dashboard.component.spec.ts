import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDashboardComponent } from './office-dashboard.component';

describe('OfficeDashboardComponent', () => {
  let component: OfficeDashboardComponent;
  let fixture: ComponentFixture<OfficeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
