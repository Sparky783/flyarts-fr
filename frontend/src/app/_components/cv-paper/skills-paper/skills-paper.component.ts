import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { SkillPaperComponent } from './skill-paper/skill-paper.component';

@Component({
  selector: 'app-skills-paper',
  imports: [
    CommonModule,
    SkillPaperComponent
  ],
  standalone: true,
  templateUrl: './skills-paper.component.html',
  styleUrl: './skills-paper.component.scss'
})
export class SkillsPaperComponent {
  @Input('skills') skills: any;
}
