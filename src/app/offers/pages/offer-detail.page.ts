import { Component, computed, inject, signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfferStore } from "../offer.store";
import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { RatingComponent } from "@/shared/rating/rating.component";

@Component({
  selector: 'app-offer-detail-page',
  standalone: true,
  imports: [CurrencyPipe, DecimalPipe, RatingComponent],
  templateUrl: './offer-detail-page.html',
  styleUrl: './offer-detail-page.scss'
})
export class OfferDetailPageComponent {
  private route = inject(ActivatedRoute);
  private store = inject(OfferStore);

  // get offer id
  private offerId = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get('id')!)
    ),
    { initialValue: null }
  )

  // now get the offer from the store
  offer = computed(() => {
    const id = Number(this.offerId());
    return this.store.offersReadonly().find(offer => offer.id === id)
  });

  // Voting UI state
  votingEnabled = signal(false);
  hasVoted = signal(false);
  userRating = signal(0);

  onVoteClick() {
    this.votingEnabled.set(true);
  }

  onRatingChange(newRating: number) {
    if (!this.offer()) return;

    const id = Number(this.offerId());
    this.store.setOfferVote(id, newRating);

    // Update local state for feedback
    this.userRating.set(newRating);
    this.hasVoted.set(true);
    this.votingEnabled.set(false); // disable further interaction
  }
}
