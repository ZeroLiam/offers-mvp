import { OffersListComponent } from "@/offers/offers-list/offers-list.component";
import { Component, inject } from "@angular/core";
import { OfferStore } from "../offer.store";

@Component({
  selector: 'app-offers-list-page',
  standalone: true,
  imports: [OffersListComponent],
  template: `
    @if(!offerPreviews()) {
      <p>Loading...</p>
    } @else if (offerPreviews()!.length === 0) {
      <p>No offers found</p>
    } @else {
      <app-offers-list [offerPreviewData]="offerPreviews()" />
    }
  `
})
export class OffersListPageComponent {
  store = inject(OfferStore);

  offerPreviews = this.store.offerPreviewList;
}
