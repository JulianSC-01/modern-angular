import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../infrastructure/types/candidate';

@Injectable()
export class CandidateService {
  constructor(
    private readonly http: HttpClient) {
  }

  getCandidates() : Observable<Candidate[]> {
    return this.http.get<Candidate[]>('/api/candidates');
  }

  getCandidatesByName(name: string) : Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`/api/candidates/${name}`);
  }

  getCandidate(id : number) : Observable<Candidate> {
    return this.http.get<Candidate>(`/api/candidate/${id}`);
  }

  createCandidate(candidate: Candidate) {
    console.log(candidate);
  }
}