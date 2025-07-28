import { AfterViewInit, Directive, ElementRef, inject, InjectionToken, input } from '@angular/core';

export const TruncateLimit =
  new InjectionToken<number>('TruncateLimit');

@Directive({
  selector: '[appTruncate]'
})
export class AppTruncate implements AfterViewInit {
  limit = input(
    inject(TruncateLimit,
      { optional: true }) ?? 80);

  private readonly elementRef =
    inject(ElementRef,
      { optional: true });

  ngAfterViewInit(): void {
    if (this.elementRef) {
      const htmlElement =
        this.elementRef.nativeElement as HTMLElement;

      htmlElement.textContent =
        htmlElement.textContent ?
          htmlElement.textContent.slice(0, this.limit()) : '';
    }
  }
}