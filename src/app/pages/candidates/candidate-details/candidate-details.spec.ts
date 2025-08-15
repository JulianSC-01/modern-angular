import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Candidate } from '../../../infrastructure/types/candidate';
import { CandidateDetails } from './candidate-details';

describe('CandidateDetails', () => {
  let component: CandidateDetails;
  let fixture: ComponentFixture<CandidateDetails>;

  const dummyCandidate : Candidate = {
    id: 'A1',
    firstName: 'Julian',
    lastName: 'Salati',
    email: 'julian@email.com',
    position: 'CS-03',
    status: 'Approved',
    offerAccepted: true
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateDetails);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('candidate', dummyCandidate);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
