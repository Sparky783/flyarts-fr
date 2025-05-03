import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-training',
    imports: [],
    templateUrl: './training.component.html',
    styleUrl: './training.component.scss'
})
export class TrainingComponent {
    @Input('training') training: any;
}