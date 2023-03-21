import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperhorComponent } from './stepperhor.component';

describe('StepperhorComponent', () => {
  let component: StepperhorComponent;
  let fixture: ComponentFixture<StepperhorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperhorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperhorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
