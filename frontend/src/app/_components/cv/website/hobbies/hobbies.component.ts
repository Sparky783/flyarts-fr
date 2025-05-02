import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hobbies',
    imports: [
        CommonModule
    ],
    templateUrl: './hobbies.component.html',
    styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
    @Input('hobbies') hobbies: any;
}
