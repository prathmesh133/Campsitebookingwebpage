import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerreviewsComponent } from './customerreviews.component';

describe('CustomerreviewsComponent', () => {
  let component: CustomerreviewsComponent;
  let fixture: ComponentFixture<CustomerreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerreviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
