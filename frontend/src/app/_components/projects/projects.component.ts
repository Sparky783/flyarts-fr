import { Component } from '@angular/core';

import { ProjectItemComponent } from "./project-item/project-item.component";

import jsonDevProjects from '../../../assets/dev-projects.json';
import jsonOtherProjects from '../../../assets/other-projects.json';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectItemComponent
  ],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  devProjects = jsonDevProjects.projects
  otherProjects = jsonOtherProjects.projects
}
