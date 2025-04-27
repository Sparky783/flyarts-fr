import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectComponent } from '../project/project.component';

import * as projects from '../../../../assets/projects.json'

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgFor,
    FontAwesomeModule,
    ProjectComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faArrowRight = faArrowRight;

  projects = projects;
}
