import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcampsitesComponent } from './bookcampsites.component';

describe('BookcampsitesComponent', () => {
  let component: BookcampsitesComponent;
  let fixture: ComponentFixture<BookcampsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookcampsitesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookcampsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
