import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/project-service';
import { ProjectCard } from '../../../shared/components/project-card/project-card';

@Component({
  imports: [
    AsyncPipe,
    ProjectCard
  ],
  selector: 'app-project-list',
  templateUrl: './project-list.html'
})
export class ProjectList {
  private readonly projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}