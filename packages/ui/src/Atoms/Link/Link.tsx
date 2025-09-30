import clsx from "clsx";
import Link from "next/link";
import { Icon } from "../Icon/Icon";
import styles from "./Link.module.scss";

interface CustomLinkProps {
  children?: React.ReactNode;
  href?: string;
  rel?: string;
  id?: string;
  target?: "_self" | "_blank";
  onClick?: () => void;
  role?: string;
  title?: string;
  ariaDisabled?: boolean;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  btn?: boolean;
  colored?: boolean;
  download?: boolean;
  style?: "icon" | "inline" | "arrow";
}

export const CustomLink = ({
  children,
  href = "#",
  rel = "noopener",
  id,
  target = "_self",
  onClick,
  role = "link",
  title = "",
  ariaDisabled,
  className,
  iconLeft,
  iconRight,
  label,
  btn,
  colored,
  download,
  style,
}: CustomLinkProps) => {
  return (
    <Link
      className={clsx(
        className,
        styles["Link"],
        styles[`Link-${style}`],
        btn && styles["Link_btn"],
        colored && styles["Link-colored"],
      )}
      href={href}
      rel={rel}
      id={id}
      target={target}
      onClick={onClick}
      role={role}
      title={title}
      aria-disabled={ariaDisabled}
      download={download}
      prefetch={!href.toLowerCase().startsWith("http")}
    >
      {iconLeft && <Icon src={`path/to/${iconLeft}`} />}
      {label}
      {iconRight && <Icon src={`path/to/${iconRight}`} />}
      {children}
    </Link>
  );
};
