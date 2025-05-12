import { Component, Input } from '@angular/core';

import { ProjectLinkComponent } from "../project-link/project-link.component";

@Component({
  selector: 'app-project',
  imports: [
    ProjectLinkComponent
  ],
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input('project') projectData: any;
}
