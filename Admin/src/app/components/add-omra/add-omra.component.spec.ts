import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOmraComponent } from './add-omra.component';

describe('AddOmraComponent', () => {
  let component: AddOmraComponent;
  let fixture: ComponentFixture<AddOmraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOmraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOmraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
