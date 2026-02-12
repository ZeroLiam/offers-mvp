import { OffersListComponent } from "@/features/offers/offers-list/offers-list.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-offers-list-page',
  standalone: true,
  imports: [OffersListComponent],
  template: `<app-offers-list />`
})
export class OffersListPageComponent {

}
