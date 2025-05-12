import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceComponent } from '../professional-experience/professional-experience.component';

@Component({
  selector: 'app-professional-experiences',
  imports: [
    CommonModule,
    ProfessionalExperienceComponent
  ],
  standalone: true,
  templateUrl: './professional-experiences.component.html',
  styleUrl: './professional-experiences.component.scss'
})
export class ProfessionalExperiencesComponent {
    @Input('experiences') experiences: any;
}
