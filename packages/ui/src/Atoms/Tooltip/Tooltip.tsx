import styles from "./Tooltip.module.scss";
import clsx from "clsx";

interface TooltipProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  style?: "default" | "inverted";
  beak?:
    | "none"
    | "below-center"
    | "below-start"
    | "below-end"
    | "above-center"
    | "above-start"
    | "above-end"
    | "start-middle"
    | "start-top"
    | "start-bottom"
    | "end-middle"
    | "end-top"
    | "end-bottom";
  ariaLabel?: string;
  ariaHidden?: boolean;
}

export const Tooltip = ({
  children,
  className,
  id,
  style,
  beak,
  ariaLabel,
  ariaHidden,
}: TooltipProps) => {
  return (
    <div
      className={clsx(
        styles.Tooltip,
        styles[`Tooltip-${style}`],
        styles[`Tooltip-Beak-${beak}`],
        className
      )}
      id={id}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    >
      {children}
    </div>
  );
};
