import { Component } from '@angular/core';

import { ProjectComponent } from '../project/project.component';

import * as jsondevProjects from '../../../../assets/dev-projects.json'
import * as jsonOtherProjects from '../../../../assets/other-projects.json'

@Component({
  selector: 'app-projects',
  imports: [
    ProjectComponent
  ],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  devProjects = jsondevProjects.projects
  otherProjects = jsonOtherProjects.projects
}
