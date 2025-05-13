import { Component } from '@angular/core';

import { SkillsPaperComponent } from "./skills-paper/skills-paper.component";
import { HobbiesPaperComponent } from "./hobbies-paper/hobbies-paper.component";
import { ProfessionalExperiencesPaperComponent } from "./professional-experiences-paper/professional-experiences-paper.component";
import { TrainingsPaperComponent } from "./trainings-paper/trainings-paper.component";

import * as cvData from '../../../assets/cv.json'

@Component({
  selector: 'app-cv-paper',
  imports: [
    SkillsPaperComponent,
    HobbiesPaperComponent,
    ProfessionalExperiencesPaperComponent,
    TrainingsPaperComponent
  ],
  standalone: true,
  templateUrl: './cv-paper.component.html',
  styleUrl: './cv-paper.component.scss'
})
export class CvPaperComponent {
  cvData = cvData;
}
