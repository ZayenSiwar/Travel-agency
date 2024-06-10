import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOmraComponent } from './g-omra.component';

describe('GOmraComponent', () => {
  let component: GOmraComponent;
  let fixture: ComponentFixture<GOmraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOmraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GOmraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
