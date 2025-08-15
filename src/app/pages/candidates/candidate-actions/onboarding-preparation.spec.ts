import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPreparation } from './onboarding-preparation';

describe('OnboardingPreparation', () => {
  let component: OnboardingPreparation;
  let fixture: ComponentFixture<OnboardingPreparation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnboardingPreparation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingPreparation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
