import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-paper',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './skill-paper.component.html',
  styleUrl: './skill-paper.component.scss'
})
export class SkillPaperComponent {
  @Input('skill') skill: any;
}
