import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hobby',
  imports: [
    FontAwesomeModule
  ],
  standalone: true,
  templateUrl: './hobby.component.html',
  styleUrl: './hobby.component.scss'
})
export class HobbyComponent {
    @Input('hobby') hobby: any;
    icon = ""
}
