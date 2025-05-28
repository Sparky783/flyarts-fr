import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HobbyPaperComponent } from './hobby-paper/hobby-paper.component';

@Component({
  selector: 'app-hobbies-paper',
  imports: [
    CommonModule,
    HobbyPaperComponent
  ],
  standalone: true,
  templateUrl: './hobbies-paper.component.html',
  styleUrl: './hobbies-paper.component.scss'
})
export class HobbiesPaperComponent {
  @Input('hobbies') hobbies: any;
}
