import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private componentToScrollTo: any;

  constructor() {
   }

  setComponentToScrollTo(component: HTMLElement) {
    this.componentToScrollTo = component;
  }

  scrollToComponent() {
    if (this.componentToScrollTo) {
      this.componentToScrollTo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
