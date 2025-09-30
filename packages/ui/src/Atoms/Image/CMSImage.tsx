import { NextImage } from "./Image";

export const CMSImage = ({ blok }: any) => {
  const {
    className,
    aria_label,
    src,
    alt,
    width,
    height,
    fill,
    quality,
    loading,
    aspectRatio,
    objectFit,
    sizes,
  } = blok ?? {};

  if (!src) {
    return null;
  }

  return (
    <NextImage
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      quality={quality}
      loading={loading}
      aspectRatio={aspectRatio}
      objectFit={objectFit}
      sizes={sizes}
      ariaLabel={aria_label}
      blok={blok}
    />
  );
};
