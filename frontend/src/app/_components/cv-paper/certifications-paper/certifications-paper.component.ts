import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-certifications-paper',
  imports: [],
  templateUrl: './certifications-paper.component.html',
  styleUrl: './certifications-paper.component.scss'
})
export class CertificationsPaperComponent {
  @Input('certifications') certifications: any;
}
