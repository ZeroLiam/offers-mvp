import { IOffer, IOfferApiObject, IOfferList, IOfferPreview, IOfferPreviewList, IRatingList } from "./offer.model";

// Let's reuse the rating avg as quick function
const RATING_AVG = (ratings: IRatingList) => {
  if (!ratings.length) return 0;

  return ratings.reduce((sum, rating) => sum + rating.value, 0) / ratings.length;
}

// Adapt API to our offer model
export function mapResponseToOffer(api: IOfferApiObject): IOffer {
  const { ratings } = api;
  const averageRating = ratings.length > 0 ? RATING_AVG(ratings) : 0;

  return { ...api, averageRating };
}

// Adapt the new entire list to a preview list
export function mapOfferToPreview(offer: IOffer): IOfferPreview {
  const { id, title, averageRating, price, img_url } = offer;

  return { id, title, averageRating, price, img_url };
}

// Sort offers by average rating
export function sortOffers(offers: IOfferPreviewList): IOfferPreviewList {
  return [...offers].sort((a,b) => b.averageRating - a.averageRating);
}


// Vote offer
export function voteOffer(id: number, rating: number, offers: IOfferList): IOfferList {
  return offers.map((offer: IOffer) => {

    // We look for the offer that we're voting for and update the ratings of that offer
    if (offer.id === id) {
      const newRatings = [
        ...offer.ratings,
        {
          value: rating,
          review_date: new Date().toISOString()
        }
      ];

      return {
        ...offer,
        ratings: newRatings,
        averageRating: RATING_AVG(newRatings)
      }
    }
    return offer;
  });
}
