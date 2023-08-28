import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Router,
} from '@angular/router';
import { slideInAnimation } from './animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent implements OnInit {
  title = 'master-portfolio';
  timelinePoints = [
    { content: 'About Me' },
    { content: 'Education' },
    { content: 'Expertise' },
    { content: 'Experience' },
    { content: 'Portfolio' },
    { content: 'Volunteer Work' },
    { content: 'Skills' },
  ];

  activeIndex: number | null = 0;

  constructor(
    private router: Router,
    private contexts: ChildrenOutletContexts
  ) {}

  ngOnInit() {
    this.router.navigate(['/intro']);
  }

  onSliderChange(event: Event) {
    const sliderValue = (event.target as HTMLInputElement).value;
    this.activeIndex = +sliderValue;
    console.log(this.activeIndex);
    if (this.activeIndex == 0) {
      this.router.navigate(['/intro']); // these paths change from root i.e / so they are absolute path i.e /new-path
    } else if (this.activeIndex == 1) {
      // relative paths are the one's which are extension to current path /app1/new-path
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
      this.router.navigate(['/home']); // error 404 page
    }
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
