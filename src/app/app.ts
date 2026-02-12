import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@/shared/header/header.component';
import { OfferStore } from './offers/offer.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('offers-mvp');
  private store = inject(OfferStore);

  offerPreviews = this.store.offerPreviewList();

  constructor() {
    this.store.loadOffers();
  }
}
