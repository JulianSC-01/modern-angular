import { ComponentRef, Directive, EmbeddedViewRef, inject, input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Loader } from '../components/loader/loader';

@Directive({
  selector: '[loading]'
})
export class AppLoader implements OnInit, OnChanges {
  loading = input(false);

  private readonly templateRef = inject(TemplateRef);
  private readonly vcRef = inject(ViewContainerRef);
  templateView? : EmbeddedViewRef<any>;
  loaderRef? : ComponentRef<Loader>;

  ngOnInit(): void {
    this.templateView =
      this.templateRef.createEmbeddedView({});

    this.loaderRef = this.vcRef.createComponent(Loader, {
      injector: this.vcRef.injector,
      projectableNodes: [this.templateView.rootNodes]
    });

    this.loaderRef.setInput('loading', this.loading());
  }

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.loaderRef) {
      this.loaderRef.setInput('loading', this.loading());
    }
  }
}