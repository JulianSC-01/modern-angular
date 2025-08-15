import { Routes } from "@angular/router";
import { ProjectDetails } from "./project-details/project-details";

export const workRoutes: Routes = [
  { path: 'projects/:id',
    component: ProjectDetails
  }
];