import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss',
})
export class RatingComponent {
  @Input({ required: true }) rating!: number;
  @Input() isInteractive = false;
  @Output() ratingChange = new EventEmitter<number>();

  FIVE_STARS = 5;

  get ratingPercentage(): number {
    return (this.rating / this.FIVE_STARS) * 100;
  }

  onClick(event: MouseEvent) {
    if (!this.isInteractive) return;

    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;

    // Calculate new rating (1–5)
    const newRating = Math.ceil((clickX / width) * 5);
    this.ratingChange.emit(newRating);
  }
}
