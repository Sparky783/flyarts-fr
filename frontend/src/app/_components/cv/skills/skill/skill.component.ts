import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
    @Input('skill') skill: any;
}
