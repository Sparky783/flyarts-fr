import { Component, Input } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
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
export class TrainingComponent {
  @Input('training') training: any;
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}