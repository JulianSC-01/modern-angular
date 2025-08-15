import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateFinalization } from './candidate-finalization';

describe('CandidateFinalization', () => {
  let component: CandidateFinalization;
  let fixture: ComponentFixture<CandidateFinalization>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateFinalization]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidateFinalization);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
