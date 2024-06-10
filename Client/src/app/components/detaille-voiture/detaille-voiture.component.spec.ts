import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleVoitureComponent } from './detaille-voiture.component';

describe('DetailleVoitureComponent', () => {
  let component: DetailleVoitureComponent;
  let fixture: ComponentFixture<DetailleVoitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleVoitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
