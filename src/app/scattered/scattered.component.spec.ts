import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatteredComponent } from './scattered.component';

describe('ScatteredComponent', () => {
  let component: ScatteredComponent;
  let fixture: ComponentFixture<ScatteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
