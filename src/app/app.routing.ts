import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import {AddProjectComponent} from './add-project/add-project.component';
import { AdminComponent } from './admin/admin.component';
import { FavoritedProjectsComponent } from './favorited-projects/favorited-projects.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'projects/:key',
    component: ProjectDetailsComponent
  },
  {
    path:'add-project',
    component: AddProjectComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'favorited',
    component: FavoritedProjectsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
