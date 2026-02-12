import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-offer-card',
  imports: [CurrencyPipe, RatingComponent],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
})
export class OfferCardComponent {
  @Input({ required: true }) id!: number;
  @Input() title!: string;
  @Input() imgUrl!: string;
  @Input() price!: number;
  @Input() averageRating!: number;
}
