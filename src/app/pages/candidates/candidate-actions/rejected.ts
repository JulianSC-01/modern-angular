import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rejected',
  imports: [],
  templateUrl: './rejected.html'
})
export class Rejected {
  candidateId = input.required<string>();
}
