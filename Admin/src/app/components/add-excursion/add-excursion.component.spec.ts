import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExcursionComponent } from './add-excursion.component';

describe('AddExcursionComponent', () => {
  let component: AddExcursionComponent;
  let fixture: ComponentFixture<AddExcursionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExcursionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
