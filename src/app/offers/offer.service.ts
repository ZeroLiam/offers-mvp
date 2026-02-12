import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IOfferApiList, IOfferList } from './offer.model';
import { mapResponseToOffer } from './offer.helper';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  // Replace one day with a real API
  private readonly offersUrl = 'assets/mvp_products.json';
  private http = inject(HttpClient);

  // GET all offers from our "API"
  fetchAllOffers(): Observable<IOfferList> {
    return this.http.get<IOfferApiList>(this.offersUrl).pipe(
      map((data: IOfferApiList) => data.map(mapResponseToOffer)),
      catchError(this.handleError)
    )
  }

  // Handle errors
  private handleError(error: unknown) {
    console.error('Failed to load a resource', error);

    return throwError(() => new Error('Failed to load resource'));
  }
}
