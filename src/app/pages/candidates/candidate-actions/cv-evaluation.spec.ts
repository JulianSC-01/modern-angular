import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEvaluation } from './cv-evaluation';

describe('CvEvaluation', () => {
  let component: CvEvaluation;
  let fixture: ComponentFixture<CvEvaluation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvEvaluation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvEvaluation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
