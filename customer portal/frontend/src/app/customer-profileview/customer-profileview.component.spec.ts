import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerProfileviewComponent } from './customer-profileview.component';

describe('CustomerProfileviewComponent', () => {
  let component: CustomerProfileviewComponent;
  let fixture: ComponentFixture<CustomerProfileviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerProfileviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerProfileviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
