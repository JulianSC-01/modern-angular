import { AsyncPipe } from '@angular/common';
import { Component, inject, input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../infrastructure/types/project';
import { ProjectService } from '../../../services/project-service';

@Component({
  imports: [
    AsyncPipe
  ],
  selector: 'app-project-card',
  templateUrl: './project-card.html'
})
export class ProjectCard implements OnChanges {
  projectId = input.required<number>();

  project$: Observable<Project> | null = null;

  private readonly projectService = inject(ProjectService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['projectId']) {
      this.project$ = this.projectService.
        getProject(this.projectId());
    }
  }
}