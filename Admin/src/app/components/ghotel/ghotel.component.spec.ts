import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhotelComponent } from './ghotel.component';

describe('GhotelComponent', () => {
  let component: GhotelComponent;
  let fixture: ComponentFixture<GhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
