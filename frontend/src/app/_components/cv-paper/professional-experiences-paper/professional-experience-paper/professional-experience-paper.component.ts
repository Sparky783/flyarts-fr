import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-professional-experience-paper',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './professional-experience-paper.component.html',
  styleUrl: './professional-experience-paper.component.scss'
})
export class ProfessionalExperiencePaperComponent {
  @Input('experience') experience: any;
}
