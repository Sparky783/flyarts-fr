import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trainings-paper',
  imports: [
    CommonModule
  ],
  standalone: true,
  templateUrl: './trainings-paper.component.html',
  styleUrl: './trainings-paper.component.scss'
})
export class TrainingsPaperComponent {
  @Input('trainings') trainings: any;
}
