import { IOffer, IOfferApiObject, IOfferPreview, IOfferPreviewList, IRatingList } from "./offer.model";

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
