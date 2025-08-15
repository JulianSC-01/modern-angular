import { Component, input } from '@angular/core';

@Component({
  selector: 'app-candidate-finalization',
  imports: [],
  templateUrl: './candidate-finalization.html'
})
export class CandidateFinalization {
  candidateId = input.required<string>();
}
