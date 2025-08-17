import { Component, inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CandidateService } from '../../../services/candidate.service';
import { createSearch } from '../../../shared/functions/create-search';

@Component({
  imports: [],
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.html'
})
export class CandidateList implements OnInit {
  private readonly candidateService = inject(CandidateService);
  candidates$ = this.candidateService.getCandidates();

  search$ = createSearch(new FormControl(''));

  ngOnInit(): void {
    this.search$.subscribe(value => {
      if (value) {
        this.candidates$ =
          this.candidateService.getCandidatesByName(value);
      } else {
        this.candidates$ =
          this.candidateService.getCandidates();
      }
    });
  }
}