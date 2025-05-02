import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ProfessionalExperiencesComponent } from '../../cv/website/professional-experiences/professional-experiences.component';
import { TrainingsComponent } from '../../cv/website/trainings/trainings.component';
import { HobbiesComponent } from '../../cv/website/hobbies/hobbies.component';
import { SkillsComponent } from '../../cv/website/skills/skills.component';

import * as cvData from '../../../../assets/cv.json'

@Component({
  selector: 'app-cv',
  imports: [
    RouterLink,
    ProfessionalExperiencesComponent,
    TrainingsComponent,
    SkillsComponent,
    HobbiesComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
    cvData = cvData;
}
