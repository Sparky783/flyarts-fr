import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperiencesPaperComponent } from './professional-experiences-paper.component';

describe('ProfessionalExperiencesComponent', () => {
  let component: ProfessionalExperiencesPaperComponent;
  let fixture: ComponentFixture<ProfessionalExperiencesPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperiencesPaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperiencesPaperComponent);
    component = fixture.componentInstance;

    component.experiences = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
