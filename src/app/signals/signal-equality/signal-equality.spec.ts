import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEquality } from './signal-equality';

describe('SignalEquality', () => {
  let component: SignalEquality;
  let fixture: ComponentFixture<SignalEquality>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEquality]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEquality);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
