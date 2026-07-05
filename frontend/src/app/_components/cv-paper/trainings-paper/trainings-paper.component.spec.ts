import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsPaperComponent } from './trainings-paper.component';

describe('TrainingsComponent', () => {
  let component: TrainingsPaperComponent;
  let fixture: ComponentFixture<TrainingsPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsPaperComponent);
    component = fixture.componentInstance;

    component.trainings = {
      content: 'Mock content for testing'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
