import { booleanAttribute, Directive, inject, input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Opposite of *ngIf.
 * ### Usage
 * ```
 * <p *notIf="conditon">Content to show if condition is false</p>
 * ```
 */
@Directive({
  selector: '[notIf]'
})
export class NotIfDirective implements OnChanges {
  notIf = input.required(
    { transform: booleanAttribute });

  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainerRef = inject(ViewContainerRef);

  private hasView = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notIf']) {
      if (this.notIf() && this.hasView) {
        this.viewContainerRef.clear();
        this.hasView = false;
      } else if (!this.notIf() && !this.hasView) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        this.hasView = true;
      }
    }
  }
}