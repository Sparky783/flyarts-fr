import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgeService } from '../../_services/age.service';

import { ProfessionalExperiencesComponent } from './professional-experiences/professional-experiences.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';

import * as cvData from '../../../assets/cv.json'

type OpenItem = { type: 'experience' | 'training' | 'skill', id: number } | null

@Component({
  selector: 'app-cv',
  imports: [
    RouterLink,
    ProfessionalExperiencesComponent,
    TrainingsComponent,
    SkillsComponent,
    HobbiesComponent
  ],
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  public readonly ageService = inject(AgeService);

  cvData = cvData;
  openItem: OpenItem = null;

  onExperienceSelected(experienceId: number) {
    this.openItem = { type: 'experience', id: experienceId };
  }

  onTrainingSelected(trainingId: number) {
    this.openItem = { type: 'training', id: trainingId };
  }

  onSkillSelected(skillId: number) {
    this.openItem = { type: 'skill', id: skillId };
  }
}
