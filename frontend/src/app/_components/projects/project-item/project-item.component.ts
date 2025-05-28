import { Component, Input } from '@angular/core';

import { ProjectLinkComponent } from "../project-link/project-link.component";

@Component({
  selector: 'app-project-item',
  imports: [
    ProjectLinkComponent
  ],
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  @Input('project') projectData: any;
}
