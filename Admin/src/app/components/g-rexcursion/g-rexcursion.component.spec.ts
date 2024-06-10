import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRexcursionComponent } from './g-rexcursion.component';

describe('GRexcursionComponent', () => {
  let component: GRexcursionComponent;
  let fixture: ComponentFixture<GRexcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRexcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GRexcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
