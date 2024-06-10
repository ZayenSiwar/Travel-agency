import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhotelComponent } from './rhotel.component';

describe('RhotelComponent', () => {
  let component: RhotelComponent;
  let fixture: ComponentFixture<RhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
