export interface ImgurAlbum {
  id: string;
  title: string;
  description: string;
  datetime: number;
  cover: string | null;
  cover_edited: string | null;
  cover_width: number | null;
  cover_height: number | null;
  account_url: string | null;
  account_id: number | null;
  privacy: string;
  layout: string;
  views: number;
  link: string;
  favorite: boolean;
  nsfw: boolean | null;
  section: string | null;
  images_count: number;
  in_gallery: boolean;
  is_ad: boolean;
  include_album_ads: boolean;
  is_album: boolean;
  order: number;
}
