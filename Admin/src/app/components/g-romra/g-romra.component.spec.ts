import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GRomraComponent } from './g-romra.component';

describe('GRomraComponent', () => {
  let component: GRomraComponent;
  let fixture: ComponentFixture<GRomraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GRomraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GRomraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
