import { Component, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
@Component({
  selector: 'app-quick-intro',
  templateUrl: './quick-intro.component.html',
  styleUrls: ['./quick-intro.component.scss'],
  animations: [
    trigger('typingAnimation', [
      state('start', style({ width: '0%' })),
      state('end', style({ width: '100%' })),
      transition('start => end', [animate('2000ms')]),
    ]),
  ],
})
export class QuickIntroComponent {
  public video_url: string =
    'https://harsh599bkt.s3.amazonaws.com/My+Portfolio.mp4';
  typedText = ' a Software Engineer in the day and Avid reader at night.';
  animationState = 'start';

  constructor(private cdr: ChangeDetectorRef) {
    this.startAnimationLoop();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.animationState = 'end';
    //   this.cdr.detectChanges();
    // }, 0);
  }

  startAnimationLoop() {
    setInterval(() => {
      this.animationState = 'start'; // Reset animation state
      this.cdr.detectChanges(); // Trigger change detection to apply the reset
      setTimeout(() => {
        this.animationState = 'end'; // Start animation
        this.cdr.detectChanges();
      }, 0);
    }, 4000); // Change this interval as needed
  }
}
