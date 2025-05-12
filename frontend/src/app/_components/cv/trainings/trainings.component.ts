import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TrainingComponent } from '../training/training.component';

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
}
