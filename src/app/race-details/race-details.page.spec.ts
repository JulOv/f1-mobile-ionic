import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RaceDetailsPage } from './race-details.page';

describe('RaceDetailsPage', () => {
  let component: RaceDetailsPage;
  let fixture: ComponentFixture<RaceDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
