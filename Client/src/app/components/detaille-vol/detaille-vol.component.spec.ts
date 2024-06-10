import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleVolComponent } from './detaille-vol.component';

describe('DetailleVolComponent', () => {
  let component: DetailleVolComponent;
  let fixture: ComponentFixture<DetailleVolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailleVolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleVolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
