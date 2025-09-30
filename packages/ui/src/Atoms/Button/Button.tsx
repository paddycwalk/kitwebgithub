"use client";

import { storyblokEditable } from "@storyblok/react";
import clsx from "clsx";
import { Icon } from "../Icon/Icon";
import styles from "./Button.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  style?: "" | "primary" | "secondary" | "tertiary" | "borderless";
  disabled?: boolean;
  onClick?: () => void;
  iconLeft?: string;
  iconRight?: string;
  ariaLabel?: string;
  ariaControls?: string;
  ariaDisabled?: boolean;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
  blok?: any;
  title?: string;
}

export const Button = ({
  children,
  className,
  id,
  type,
  style,
  disabled,
  iconLeft,
  iconRight,
  onClick,
  ariaLabel,
  ariaControls,
  ariaDisabled,
  ariaExpanded,
  ariaHasPopup,
  blok,
  title,
}: ButtonProps) => {
  return (
    <button
      {...(blok ? storyblokEditable(blok) : {})}
      className={clsx(styles.Button, styles[`Button-${style}`], className)}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-disabled={ariaDisabled}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      title={title}
    >
      {iconLeft && <Icon src={`path/to/${iconLeft}`} />}
      {children}
      {iconRight && <Icon src={`path/to/${iconRight}`} />}
    </button>
  );
};
