import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NotIfDirective } from './app-not-if-directive';

describe('NotIfDirective', () => {
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
      const directive = new NotIfDirective();
      expect(directive).toBeTruthy();
    });
  });
});
