import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  isFlippedOne: boolean = false;
  isFlippedTwo: boolean = false;
  isFlippedThree: boolean = false;
  isFlippedFour: boolean = false;
  isFlippedFive: boolean = false;
  isFlippedSix: boolean = false;

  toggleFlipOne() {
    this.isFlippedOne = !this.isFlippedOne;
  }

  toggleFlipTwo() {
    this.isFlippedTwo = !this.isFlippedTwo;
  }

  toggleFlipThree() {
    this.isFlippedThree = !this.isFlippedThree;
  }

  toggleFlipFour() {
    this.isFlippedFour = !this.isFlippedFour;
  }

  toggleFlipFive() {
    this.isFlippedFive = !this.isFlippedFive;
  }

  toggleFlipSix() {
    this.isFlippedSix = !this.isFlippedSix;
  }
  
}
