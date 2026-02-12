# OffersMvp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Overview

This project is a minimal viable product (MVP) for a marketplace application where users can:

 - View a list of offers ordered by votes
 - View detailed information for a specific offer
 - Upvote / rate offers
 - Purchase an offer via an external platform

The goal was to build a clean, responsive Angular application focused on core functionality and fast market entry.

## Development server

1. Install dependencies

```bash
npm install
```

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Features

### Offer List

 - Displays all offers
 - Sorted dynamically by vote score
 - Client-side routing to detail pages

### Offer Detail Page

 - Full offer information
 - Rating component (interactive voting)
 - External purchase link
 - Responsive layout

### Voting System

 - Users can rate offers (1–5 stars)
 - Ratings update average score dynamically
 - UI prevents duplicate voting per session

### Purchase Integration

 - "Buy Now" button redirects to:
```js
https://www.rebuy.de/kaufen/suchen?q=<offer-slug>
```

## Project Structure

``` bash
.
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── README.md
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── src
│   ├── main.ts
│   ├── index.html
│   ├── styles.scss
│   ├── app.routes.ts
│   ├── app
│   │   ├── features
│   │   │   └── offers
│   │   │       ├── pages
│   │   │       │   ├── offers-list-page
│   │   │       │   │   ├── offers-list-page.component.ts
│   │   │       │   │   ├── offers-list-page.component.html
│   │   │       │   │   └── offers-list-page.component.scss
│   │   │       │   └── offers-detail-page
│   │   │       │       ├── offers-detail-page.component.ts
│   │   │       │       ├── offers-detail-page.component.html
│   │   │       │       └── offers-detail-page.component.scss
│   │   │       ├── offer.store.ts
│   │   │       └── offer.model.ts
│   │   ├── components
│   │   │   └── rating
│   │   │       ├── rating.component.ts
│   │   │       ├── rating.component.html
│   │   │       └── rating.component.scss
│   │   └── other app files…
│   └── assets
│       └── logo.png
└── other config files…
```

## Architecture Notes

 - App has only one feature: Offers
   - In here we have the pages, helpers, model, service, and store
 - "Dumb" components are in a shared folder to be reused
 - Centralized offer state via OfferStore
 - Pages templates:
   - Offers List Page calls the OfferList component, so the template is embedded due to be short
   - Offers Details has a more complex template, therefore it has it's html
 - Reusable RatingComponent (read-only & interactive modes)
   - Interactive mode enables the stars to be hovered and click
   - Click on stars submits vote
 - Clean BEM-based SCSS structure as much as possible
 - Responsive Behavior
   - Mobile: Stacked layout
   - Tablet: Two-column structure
   - Desktop: Optimized spacing and typography


## Future Improvements (Post MVP)

 - Persist votes using localStorage (stop reset on refresh)
 - Backend API integration for real vote storage
 - Prevent multiple votes per user
 - Loading skeletons instead of simple loading text
 - Animations for rating interactions
 - Unit and integration tests
