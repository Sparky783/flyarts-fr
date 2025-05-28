import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperiencePaperComponent } from './professional-experience-paper/professional-experience-paper.component';

@Component({
  selector: 'app-professional-experiences-paper',
  imports: [
    CommonModule,
    ProfessionalExperiencePaperComponent
  ],
  standalone: true,
  templateUrl: './professional-experiences-paper.component.html',
  styleUrl: './professional-experiences-paper.component.scss'
})
export class ProfessionalExperiencesPaperComponent {
  @Input('experiences') experiences: any;
}
