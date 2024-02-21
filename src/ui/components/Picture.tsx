import { PictureModel } from "@/models/PictureModel";
import Image from "next/image";

export default function Picture({
  pictures,
  alt = "",
  objectFit = "object-cover",
  className = "",
}: PictureModel) {
  return (
    <div className={`${className}`}>
      {pictures.map((picture) => (
        <Image
          key={picture.src}
          src={picture.src}
          alt={alt}
          fill={true}
          className={`${objectFit} ${picture.breakpoints}`}
        />
      ))}
    </div>
  );
}
