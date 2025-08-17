import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateService } from '../../../services/candidate.service';
import { CandidateList } from './candidate-list';

describe('CandidateList', () => {
  let component: CandidateList;
  let fixture: ComponentFixture<CandidateList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CandidateList
      ],
      providers: [
        CandidateService,
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
