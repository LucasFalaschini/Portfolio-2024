import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit{
  texts: string[] = ["An Angular expert.", "A FullStack in progress.", "A programming lover."]; 
  currentTextIndex: number = 0;
  currentText: string = '';

  constructor() { }

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    const text = this.texts[this.currentTextIndex];
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        this.currentText += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
        if (this.currentTextIndex === this.texts.length - 1) {
          return;
        }
        setTimeout(() => {
          this.deleteText();
        }, 1000);
      }
    }, 80);
  }

  deleteText(): void {
    let index = this.currentText.length - 1;
    const deletingInterval = setInterval(() => {
      if (index >= 0) {
        this.currentText = this.currentText.slice(0, index);
        index--;
      } else {
        clearInterval(deletingInterval);
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        setTimeout(() => {
          this.typeText();
        }, 1000);
      }
    }, 25);
  }

}
