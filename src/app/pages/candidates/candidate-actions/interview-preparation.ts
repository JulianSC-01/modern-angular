import { Component, input } from '@angular/core';

@Component({
  selector: 'app-interview-preparation',
  imports: [],
  templateUrl: './interview-preparation.html'
})
export class InterviewPreparation {
  candidateId = input.required<string>();
}
