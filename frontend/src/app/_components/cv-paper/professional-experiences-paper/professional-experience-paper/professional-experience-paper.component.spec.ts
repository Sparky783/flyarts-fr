import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalExperienceComponent } from './professional-experience-paper.component';

describe('ProfessionalExperienceComponent', () => {
  let component: ProfessionalExperienceComponent;
  let fixture: ComponentFixture<ProfessionalExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalExperienceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfessionalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
