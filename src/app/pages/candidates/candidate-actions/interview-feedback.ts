import { Component, input } from '@angular/core';

@Component({
  selector: 'app-interview-feedback',
  imports: [],
  templateUrl: './interview-feedback.html'
})
export class InterviewFeedback {
  candidateId = input.required<string>();
}
