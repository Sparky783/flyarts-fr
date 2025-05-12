import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectComponent } from '../project/project.component';

import * as jsonProjects from '../../../../assets/dev-projects.json'

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CommonModule,
    ProjectComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = jsonProjects.projects;
}
