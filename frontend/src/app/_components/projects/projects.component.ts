import { Component } from '@angular/core';

import { ProjectItemComponent } from "./project-item/project-item.component";

import * as jsondevProjects from '../../../assets/dev-projects.json'
import * as jsonOtherProjects from '../../../assets/other-projects.json'

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
  devProjects = jsondevProjects.projects
  otherProjects = jsonOtherProjects.projects
}
