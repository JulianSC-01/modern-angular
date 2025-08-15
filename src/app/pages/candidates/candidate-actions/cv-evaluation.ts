import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cv-evaluation',
  imports: [],
  templateUrl: './cv-evaluation.html'
})
export class CvEvaluation {
  candidateId = input.required<string>();
}
