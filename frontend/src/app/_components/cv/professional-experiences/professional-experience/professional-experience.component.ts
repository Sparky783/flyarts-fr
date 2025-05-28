import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

import { ProfessionalExperienceSkillsComponent } from './professional-experience-skills/professional-experience-skills.component';

@Component({
  selector: 'app-professional-experience',
  imports: [
    CommonModule,
    ProfessionalExperienceSkillsComponent
  ],
  standalone: true,
  templateUrl: './professional-experience.component.html',
  styleUrl: './professional-experience.component.scss',
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
export class ProfessionalExperienceComponent {
  @Input('experience') experience: any;
  @Input() isActive: boolean = false;
  @Output() toggleEvent = new EventEmitter<void>();

  toggle() {
    this.toggleEvent.emit();
  }
}
