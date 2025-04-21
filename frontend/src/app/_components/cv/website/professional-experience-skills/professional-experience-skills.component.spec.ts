import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceSkillsComponent } from './professional-experience-skills.component';

describe('ProfessionalExperienceSkillsComponent', () => {
  let component: ProfessionalExperienceSkillsComponent;
  let fixture: ComponentFixture<ProfessionalExperienceSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperienceSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
