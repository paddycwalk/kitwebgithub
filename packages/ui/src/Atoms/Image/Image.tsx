import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import Image from "next/image";
import styles from "./Image.module.scss";

interface StoryblokAsset {
  filename: string;
}

interface ImageProps {
  src: StoryblokAsset;
  alt?: string;
  id?: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  quality?: number;
  loading?: "lazy" | "eager";
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  sizes?: string;
  ariaLabel?: string;
  blok?: any;
}

export const NextImage = ({
  className,
  id,
  src,
  alt = "",
  width,
  height,
  fill,
  quality = 100,
  loading = "lazy",
  aspectRatio,
  objectFit,
  sizes,
  ariaLabel,
  blok,
}: // sizes = '(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw',

ImageProps) => {
  return (
    <figure
      className={clsx(className, styles.Image, styles[`Image-${aspectRatio}`])}
      id={id}
      aria-label={ariaLabel}
    >
      <Image
        {...(blok ? storyblokEditable(blok) : {})}
        alt={alt}
        src={src.filename}
        {...(fill ? { fill: true } : { width, height })}
        quality={quality}
        loading={loading}
        className={clsx(className, styles[`Image-${objectFit}`])}
        sizes={sizes}
        aria-label={ariaLabel}
      />
    </figure>
  );
};
