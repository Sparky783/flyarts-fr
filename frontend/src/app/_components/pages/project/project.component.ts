import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input('project') projectData: any;
}
