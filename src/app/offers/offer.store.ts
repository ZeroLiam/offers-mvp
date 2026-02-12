import { computed, inject, Injectable, signal } from "@angular/core";
import { IOfferList, IOfferPreviewList } from "./offer.model";
import { OfferService } from "./offer.service";
import { mapOfferToPreview, sortOffers } from "./offer.helper";

@Injectable({ providedIn: 'root' })
export class OfferStore {
  offerService = inject(OfferService);
  private readonly offers = signal<IOfferList>([]);

  // Public readonly
  readonly offersReadonly = this.offers.asReadonly();
  readonly offerPreviewList = computed<IOfferPreviewList>(() =>
    sortOffers(this.offers().map(mapOfferToPreview))
  );

  loadOffers() {
    // if we already have offers, don't fetch
    if (this.hasOffers()) return;

    this.offerService.fetchAllOffers().subscribe(offers => this.setOffers(offers));
  }

  setOffers(offers: IOfferList) {
    this.offers.set(offers);
  }

  hasOffers(): boolean {
    return this.offers().length > 0;
  }

  selectOfferById(id: number) {
    return computed(() =>
      this.offers().find(offer => offer.id === id)
    );
  }
}
