import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hobby-paper',
  imports: [
  ],
  standalone: true,
  templateUrl: './hobby-paper.component.html',
  styleUrl: './hobby-paper.component.scss'
})
export class HobbyPaperComponent {
  @Input('hobby') hobby: any;
}
