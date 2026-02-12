import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'offers',
    pathMatch: 'full'
  },
  {
    path: 'offers',
    data: {
      title: 'Offers List'
    },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./offers/pages/offers-list.page')
        .then(m => m.OffersListPageComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'offers'
  }
];
