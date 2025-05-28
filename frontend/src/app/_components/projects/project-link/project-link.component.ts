import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-link',
  imports: [
    RouterLink,
    CommonModule
  ],
  standalone: true,
  templateUrl: './project-link.component.html',
  styleUrl: './project-link.component.scss'
})
export class ProjectLinkComponent {
  @Input('link') link: any;
  @Input('isDisabled') isDisabled: any;
}
