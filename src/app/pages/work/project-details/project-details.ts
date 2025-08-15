import { AsyncPipe } from '@angular/common';
import { Component, inject, input, numberAttribute, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../../infrastructure/types/project';
import { ProjectService } from '../../../services/project-service';
import { ProjectCard } from "../../../shared/components/project-card/project-card";

@Component({
  imports: [
    AsyncPipe,
    ProjectCard
  ],
  selector: 'app-project-details',
  templateUrl: './project-details.html'
})
export class ProjectDetails
  implements OnChanges {
  id = input.required<number, string>(
    { transform: numberAttribute });

  private readonly projectService = inject(ProjectService);
  project$: Observable<Project> | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.project$ = this.projectService.getProject(this.id());
    }
  }
}
