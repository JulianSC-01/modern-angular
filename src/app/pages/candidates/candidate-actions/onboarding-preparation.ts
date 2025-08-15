import { Component, input } from '@angular/core';

@Component({
  selector: 'app-onboarding-preparation',
  imports: [],
  templateUrl: './onboarding-preparation.html'
})
export class OnboardingPreparation {
  candidateId = input.required<string>();
}
