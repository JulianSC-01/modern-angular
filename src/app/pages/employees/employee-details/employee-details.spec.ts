import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideRouter } from '@angular/router';
import { EmployeeDetails } from './employee-details';

describe('EmployeeDetails', () => {
  let component: EmployeeDetails;
  let fixture: ComponentFixture<EmployeeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        EmployeeDetails
      ],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});