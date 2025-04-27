import { Routes } from '@angular/router';

import { HomeComponent } from './_components/pages/home/home.component';
import { LoginComponent } from './_components/pages/login/login.component';
import { CvComponent } from './_components/pages/cv/cv.component';
import { ContactComponent } from './_components/pages/contact/contact.component';
import { WebsiteComponent } from './_components/projects/website/website.component';
import { ProjectsComponent } from './_components/pages/projects/projects.component';

import { adminAuthGuard } from './_helpers/admin-auth.guard';

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
          {
            path: 'websites',
            component: WebsiteComponent,
          }
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
  },
  // {
  //     path: 'login',
  //     title: 'User login',
  //     component: LoginComponent
  // },
  // {
  //     path: 'admin',
  //     children: [
  //         {
  //             path: 'users',
  //             title: 'Admin user manager',
  //             canActivate: [adminAuthGuard],
  //             loadComponent: () => import('./admin/_components/users/users.component').then(m => m.UsersComponent)
  //         }
  //     ]
  // }
];
