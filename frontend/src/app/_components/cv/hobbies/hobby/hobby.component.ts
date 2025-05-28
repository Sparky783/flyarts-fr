import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby',
  imports: [
  ],
  standalone: true,
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {
  @Input('hobby') hobby: any;
}
