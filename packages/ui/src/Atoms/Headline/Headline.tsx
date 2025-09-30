import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import styles from "./Headline.module.scss";

interface HeadlineProps {
  children: React.ReactNode;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  id?: string;
  style?: "primary" | "secondary" | "tertiary" | "borderless";
  size?: "s" | "sm" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
  ariaLabel?: string;
  ariaHidden?: boolean;
  bold?: boolean;
  blok?: any;
  responsive?: boolean;
}

export const Headline = ({
  children,
  tag: Tag = "h1",
  className,
  id,
  style,
  size,
  ariaLabel,
  ariaHidden,
  bold,
  blok,
  responsive,
}: HeadlineProps) => {
  return (
    <Tag
      {...(blok ? storyblokEditable(blok) : {})}
      className={clsx(
        styles.Headline,
        styles[`Headline-${style}`],
        size && `-size-${size}`,
        responsive && `-size-r`,
        bold && "-bold",
        className,
      )}
      id={id}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {children}
    </Tag>
  );
};
