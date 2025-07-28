import { TestBed } from '@angular/core/testing';
import { AppTruncate } from './app-truncate';

describe('AppTruncate', () => {
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new AppTruncate();
      expect(directive).toBeTruthy();
    });
  });
});