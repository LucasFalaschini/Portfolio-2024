import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef } from '@angular/core';

import { register } from 'swiper/element/bundle';
import { ScrollService } from '../../services/scroll.service';

register()
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private scrollService: ScrollService, private elementRef: ElementRef) {}

  ngOnInit() {
    this.scrollService.scrollToComponent();
  }
}
