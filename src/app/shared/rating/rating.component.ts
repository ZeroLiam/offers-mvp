import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input({ required: true }) rating!: number;
  @Input() isInteractive = false;

  FIVE_STARS = 5;

  get ratingPercentage(): number {
    return (this.rating / this.FIVE_STARS) * 100;
  }
}
