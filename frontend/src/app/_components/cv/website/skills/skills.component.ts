import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    SkillComponent
  ],
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [
    trigger('slideToggle', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: 0, opacity: 0 }))
      ]),
    ])
  ]
})
export class SkillsComponent {
  @Input('skills') skills: any;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
