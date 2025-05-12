import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfessionalExperiencesComponent } from './professional-experiences/professional-experiences.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { SkillsComponent } from './skills/skills.component';

import * as cvData from '../../../assets/cv.json'

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
  cvData = cvData;
}
