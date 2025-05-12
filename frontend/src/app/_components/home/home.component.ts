import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProjectItemComponent } from "../projects/project-item/project-item.component";

import * as jsonProjects from '../../../assets/dev-projects.json'

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    CommonModule,
    ProjectItemComponent
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  projects = jsonProjects.projects;
}
