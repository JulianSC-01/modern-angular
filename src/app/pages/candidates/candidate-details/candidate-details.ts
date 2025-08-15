import { NgComponentOutlet } from '@angular/common';
import { Component, computed, input, Type } from '@angular/core';
import { Candidate } from '../../../infrastructure/types/candidate';
import { CandidateFinalization } from '../candidate-actions/candidate-finalization';
import { CvEvaluation } from '../candidate-actions/cv-evaluation';
import { InterviewFeedback } from '../candidate-actions/interview-feedback';
import { InterviewPreparation } from '../candidate-actions/interview-preparation';
import { OnboardingPreparation } from '../candidate-actions/onboarding-preparation';
import { Rejected } from '../candidate-actions/rejected';

export type CandidateActions =
  CvEvaluation | InterviewPreparation | InterviewFeedback | Rejected |
  OnboardingPreparation | CandidateFinalization;

@Component({
  imports: [
    NgComponentOutlet
  ],
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.html'
})
export class CandidateDetails {
  candidate = input.required<Candidate>();

  actionsSection =
    computed<Type<CandidateActions> | null>(() => {
      switch (this.candidate().status) {
        case 'CV evaluation':
          return CvEvaluation;
        case 'Interview preparation':
          return InterviewPreparation;
        case 'Interview feedback':
          return InterviewFeedback
        case 'Rejected':
          return Rejected;
        case 'Approved':
          return this.candidate().offerAccepted ?
            OnboardingPreparation : CandidateFinalization;
        default:
          throw new Error(
            `Unknown candidate status: ${this.candidate().status}`);
      }
    });
}