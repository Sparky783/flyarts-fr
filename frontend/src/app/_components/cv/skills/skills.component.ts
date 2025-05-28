import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

import { SkillComponent } from './skill/skill.component';

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
  @Input() openItem: { type: string, id: number } | null = null;
  @Output() skillSelected = new EventEmitter<number>();

  isActive(): boolean {
    return this.openItem?.type === 'skill';
  }

  toggle() {
    this.skillSelected.emit();
  }
}
