import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  title: string = 'flyarts.fr';
  date: Date = new Date();
}
