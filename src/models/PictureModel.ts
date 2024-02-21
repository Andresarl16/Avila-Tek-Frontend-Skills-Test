export type ObjectFit =
  | "object-contain"
  | "object-cover"
  | "object-fill"
  | "object-none"
  | "object-scale-down";

export interface PictureModel {
  pictures: Array<PictureImage>;
  alt?: string;
  objectFit?: ObjectFit;
  className?: string;
}

export interface PictureImage {
  src: string;
  breakpoints: string;
}
