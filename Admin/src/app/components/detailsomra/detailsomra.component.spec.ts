import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsomraComponent } from './detailsomra.component';

describe('DetailsomraComponent', () => {
  let component: DetailsomraComponent;
  let fixture: ComponentFixture<DetailsomraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsomraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsomraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
