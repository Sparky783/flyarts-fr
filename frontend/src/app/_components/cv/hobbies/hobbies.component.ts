import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HobbyComponent } from './hobby/hobby.component';

@Component({
  selector: 'app-hobbies',
  imports: [
    CommonModule,
    HobbyComponent
  ],
  standalone: true,
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  @Input('hobbies') hobbies: any;
}
