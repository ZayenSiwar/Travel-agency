import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplimentaireComponent } from './supplimentaire.component';

describe('SupplimentaireComponent', () => {
  let component: SupplimentaireComponent;
  let fixture: ComponentFixture<SupplimentaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplimentaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplimentaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
