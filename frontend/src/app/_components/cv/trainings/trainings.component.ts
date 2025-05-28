import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TrainingComponent } from './training/training.component';

@Component({
  selector: 'app-trainings',
  imports: [
    CommonModule,
    TrainingComponent
  ],
  standalone: true,
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.scss'
})
export class TrainingsComponent {
  @Input('trainings') trainings: any;
  @Input() openItem: { type: string, id: number } | null = null;
  @Output() trainingSelected = new EventEmitter<number>();

  isActive(trainingId: number): boolean {
    return this.openItem?.type === 'training' && this.openItem?.id === trainingId;
  }
}
