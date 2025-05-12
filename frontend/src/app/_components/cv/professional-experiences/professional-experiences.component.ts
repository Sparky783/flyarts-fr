import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';

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
  @Input() openItem: { type: string, id: number } | null = null;
  @Output() experienceSelected = new EventEmitter<number>();

  isActive(experienceId: number): boolean {
    return this.openItem?.type === 'experience' && this.openItem?.id === experienceId;
  }
}
