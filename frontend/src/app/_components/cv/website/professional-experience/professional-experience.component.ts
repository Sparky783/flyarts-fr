import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceSkillsComponent } from '../professional-experience-skills/professional-experience-skills.component';

@Component({
  selector: 'app-professional-experience',
  imports: [
    CommonModule,
    ProfessionalExperienceSkillsComponent
  ],
  standalone: true,
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss'
})
export class ProfessionalExperienceComponent {
    @Input('experience') experience: any;
}
