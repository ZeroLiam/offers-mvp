// API Response model

export interface IRating {
  value: number;
  review_date: string;
}

export type IRatingList = IRating[];

export interface IOfferApiObject {
  id: number;
  ratings: IRatingList;
  total_ratings: number;
  category: string;
  brand: string;
  operating_system: string;
  model: string;
  title: string;
  lorem_text: string;
  description: string;
  sku: string;
  price: number;
  slug: string;
  img_url: string;
}

export type IOfferApiList = IOfferApiObject[];

// Now reuse the model for our app

// Cleanup - we don't need all properties from the API
type IBaseOffer = Omit<
  IOfferApiObject,
  'lorem_text' | 'total_ratings'
  >;

export interface IOffer extends IBaseOffer {
    averageRating: number; // we'll derive it in the app, especially when someone votes
}

export type IOfferList = IOffer[];

// We need the preview of the offers so we make another interface
export type IOfferPreview = Pick<
  IOffer,
  'id' | 'title' | 'averageRating' | 'price' | 'img_url'
  >;

export type IOfferPreviewList = IOfferPreview[];
