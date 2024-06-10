import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplimentaireComponent } from './add-supplimentaire.component';

describe('AddSupplimentaireComponent', () => {
  let component: AddSupplimentaireComponent;
  let fixture: ComponentFixture<AddSupplimentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupplimentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
