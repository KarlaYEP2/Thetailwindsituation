import { Component } from '@angular/core';
import { TimelineUIComponent } from '../../UI/timeline/timeline.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TimelineUIComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {}
