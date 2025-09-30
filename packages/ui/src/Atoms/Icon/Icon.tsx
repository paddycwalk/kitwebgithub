import styles from "./Icon.module.scss";
import clsx from "clsx";
import ReactInlinesvg from "react-inlinesvg";

interface IconProps {
  src: string;
  title?: string;
  width?: number;
  height?: number;
  fill?: string;
  size?: string;
  className?: string;
  ariaHidden?: boolean;
  ariaDescribedBy?: string;
  ariaLabel?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  src,
  width,
  height,
  title,
  fill,
  size,
  className,
  ariaHidden,
  ariaDescribedBy,
  ariaLabel,
  style,
}: IconProps) => {
  return (
    <ReactInlinesvg
      className={clsx(size && styles.Icon, styles[`Icon-${size}`], className)}
      src={src}
      width={width}
      height={height}
      title={title}
      fill={fill}
      aria-hidden={ariaHidden}
      aria-describedby={ariaDescribedBy}
      aria-label={ariaLabel}
      style={style}
    />
  );
};
