import { OfferCardComponent } from '@/shared/offer-card/offer-card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.scss',
})
export class OffersListComponent {

}
