import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtailsVoyageComponent } from './dtails-voyage.component';

describe('DtailsVoyageComponent', () => {
  let component: DtailsVoyageComponent;
  let fixture: ComponentFixture<DtailsVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtailsVoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DtailsVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
