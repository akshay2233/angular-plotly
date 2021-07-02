import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostogramComponent } from './hostogram.component';

describe('HostogramComponent', () => {
  let component: HostogramComponent;
  let fixture: ComponentFixture<HostogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
