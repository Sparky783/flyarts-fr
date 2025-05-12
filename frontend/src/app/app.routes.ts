import { Routes } from '@angular/router';

import { HomeComponent } from './_components/pages/home/home.component';
import { CvComponent } from './_components/pages/cv/cv.component';
import { ContactComponent } from './_components/pages/contact/contact.component';
import { ProjectsComponent } from './_components/pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        children: [
          // {
          //   path: 'retropie',
          //   component: RetropieComponent,
          // }
        ]
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'cv',
        component: CvComponent,
      }
    ]
  }
];
