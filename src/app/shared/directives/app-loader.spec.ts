import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppLoader } from './app-loader';

describe('AppLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TemplateRef,
          useValue: {}
        },
        {
          provide: ViewContainerRef,
          useValue: {}
        }
      ]
    });
  });

  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new AppLoader();
      expect(directive).toBeTruthy();
    });
  });
});
