import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitcampsitesComponent } from './visitcampsites.component';

describe('VisitcampsitesComponent', () => {
  let component: VisitcampsitesComponent;
  let fixture: ComponentFixture<VisitcampsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitcampsitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitcampsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
