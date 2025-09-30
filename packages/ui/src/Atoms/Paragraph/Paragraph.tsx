import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import styles from "./Paragraph.module.scss";

interface ParagraphProps {
  label: string;
  className?: string;
  id?: string;
  bold?: boolean;
  style?: "primary" | "secondary" | "tertiary" | "borderless";
  ariaLabel?: string;
  blok?: any;
}

export const Paragraph = ({
  label,
  className,
  id,
  bold,
  style,
  ariaLabel,
  blok,
}: ParagraphProps) => {
  return (
    <p
      {...(blok ? storyblokEditable(blok) : {})}
      className={clsx(
        styles.Paragraph,
        styles[`Paragraph-${style}`],
        bold && "-bold",
        className,
      )}
      id={id}
      aria-label={ariaLabel}
    >
      {label}
    </p>
  );
};
