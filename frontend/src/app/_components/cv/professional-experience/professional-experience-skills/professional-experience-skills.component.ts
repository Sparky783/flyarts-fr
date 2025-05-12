import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professional-experience-skills',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './professional-experience-skills.component.html',
  styleUrl: './professional-experience-skills.component.scss'
})
export class ProfessionalExperienceSkillsComponent {
    @Input('skills') skills: any;
}
