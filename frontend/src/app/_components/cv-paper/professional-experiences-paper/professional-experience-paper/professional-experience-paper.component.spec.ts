import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperiencePaperComponent } from './professional-experience-paper.component';

describe('ProfessionalExperienceComponent', () => {
  let component: ProfessionalExperiencePaperComponent;
  let fixture: ComponentFixture<ProfessionalExperiencePaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperiencePaperComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperiencePaperComponent);
    component = fixture.componentInstance;

    component.experience = {
      content: 'Mock content for testing'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
