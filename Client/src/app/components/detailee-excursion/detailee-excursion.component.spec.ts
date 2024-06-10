import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaileeExcursionComponent } from './detailee-excursion.component';

describe('DetaileeExcursionComponent', () => {
  let component: DetaileeExcursionComponent;
  let fixture: ComponentFixture<DetaileeExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaileeExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaileeExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
