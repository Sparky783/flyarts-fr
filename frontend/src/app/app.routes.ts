import { Routes } from '@angular/router';

import { HomeComponent } from './_components/pages/home/home.component';
import { LoginComponent } from './_components/pages/login/login.component';

import { adminAuthGuard } from './_helpers/admin-auth.guard';

export const routes: Routes = [
  {
    path: '',
    title: 'Home page',
    component: HomeComponent
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
