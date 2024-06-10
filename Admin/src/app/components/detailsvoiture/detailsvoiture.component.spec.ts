import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsvoitureComponent } from './detailsvoiture.component';

describe('DetailsvoitureComponent', () => {
  let component: DetailsvoitureComponent;
  let fixture: ComponentFixture<DetailsvoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsvoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsvoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
