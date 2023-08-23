import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'master-portfolio';
  timelinePoints = [
    { content: 'Point 1 Content' },
    { content: 'Point 2 Content' },
    { content: 'Point 3 Content' },
    { content: 'Point 4 Content' },
    { content: 'Point 5 Content' },
    { content: 'Point 6 Content' },
    { content: 'Point 7 Content' },
  ];
  activeIndex: number | null = 0;

  constructor(private router: Router) {}

  onSliderChange(event: Event) {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.activeIndex = +sliderValue;
    console.log(this.activeIndex);
    if (this.activeIndex == 0) {
      this.router.navigate(['/intro']);
    } else if (this.activeIndex == 1) {
      this.router.navigate(['/education-details']);
    } else if (this.activeIndex == 2) {
      this.router.navigate(['/skills']);
    } else if (this.activeIndex == 3) {
      this.router.navigate(['/employment-details']);
    } else if (this.activeIndex == 4) {
      this.router.navigate(['/project-details']);
    } else if (this.activeIndex == 5) {
      this.router.navigate(['/achievements']);
    } else if (this.activeIndex == 6) {
      this.router.navigate(['/volunteering']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
