import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRtransfertComponent } from './g-rtransfert.component';

describe('GRtransfertComponent', () => {
  let component: GRtransfertComponent;
  let fixture: ComponentFixture<GRtransfertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRtransfertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GRtransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
