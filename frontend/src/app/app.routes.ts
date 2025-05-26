import { Routes } from '@angular/router';

import { RootComponent } from './_components/layouts/root/root.component';
import { HomeComponent } from './_components/home/home.component';
import { CvComponent } from './_components/cv/cv.component';
import { ContactComponent } from './_components/contact/contact.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { CvPaperComponent } from './_components/cv-paper/cv-paper.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    component: RootComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'projects',
        title: 'Projets',
        component: ProjectsComponent
      },
      {
        path: 'project',
        title: 'Projet',
        children: [
          {
            path: 'retropie',
            title: 'Projet Retropie',
            loadComponent: () => import('./_components/projects/project-pages/retropie/retropie.component').then(m => m.RetropieComponent)
          },
          {
            path: 'random-player',
            title: 'Projet Random Player',
            loadComponent: () => import('./_components/projects/project-pages/random-player/random-player.component').then(m => m.RandomPlayerComponent)
          }
        ]
      },
      {
        path: 'contact',
        title: 'Contacter',
        component: ContactComponent,
      },
      {
        path: 'cv',
        title: 'CV',
        component: CvComponent,
      }
    ]
  },
  {
    path: 'cv-paper',
    title: 'CV format papier',
    component: CvPaperComponent
  }
];
