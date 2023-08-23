import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-intro',
  templateUrl: './quick-intro.component.html',
  styleUrls: ['./quick-intro.component.scss'],
})
export class QuickIntroComponent {
  public video_url: string =
    'https://harsh599bkt.s3.amazonaws.com/My+Portfolio.mp4';
}
