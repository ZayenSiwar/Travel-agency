import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecteeComponent } from './connectee.component';

describe('ConnecteeComponent', () => {
  let component: ConnecteeComponent;
  let fixture: ComponentFixture<ConnecteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnecteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
