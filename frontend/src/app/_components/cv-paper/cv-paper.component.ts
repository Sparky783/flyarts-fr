import { Component, inject } from '@angular/core';
import { AgeService } from '../../_services/age.service';

import { SkillsPaperComponent } from "./skills-paper/skills-paper.component";
import { HobbiesPaperComponent } from "./hobbies-paper/hobbies-paper.component";
import { ProfessionalExperiencesPaperComponent } from "./professional-experiences-paper/professional-experiences-paper.component";
import { TrainingsPaperComponent } from "./trainings-paper/trainings-paper.component";

import * as cvData from '../../../assets/cv.json'
import { CertificationsPaperComponent } from './certifications-paper/certifications-paper.component';

@Component({
  selector: 'app-cv-paper',
  imports: [
    SkillsPaperComponent,
    CertificationsPaperComponent,
    HobbiesPaperComponent,
    ProfessionalExperiencesPaperComponent,
    TrainingsPaperComponent
  ],
  standalone: true,
  templateUrl: './cv-paper.component.html',
  styleUrl: './cv-paper.component.scss'
})
export class CvPaperComponent {
  public readonly ageService = inject(AgeService);

  cvData = cvData;
}
