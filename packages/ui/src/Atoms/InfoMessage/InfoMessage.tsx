import styles from "./InfoMessage.module.scss";
import { Icon } from "../Icon/Icon";
import clsx from "clsx";

interface InfoMessageProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  type?: "alert" | "warning" | "success";
  ariaLabel?: string;
  showicon?: boolean;
}

const renderInfoIcon = (type: string) => {
  switch (type) {
    case "alert":
      return <Icon src="/path/to/alert-icon.svg" />;
    case "warning":
      return <Icon src="/path/to/warning-icon.svg" />;
    case "success":
      return <Icon src="/path/to/success-icon.svg" />;
    default:
      return null;
  }
};

export const InfoMessage = ({
  children,
  className,
  id,
  type = "alert",
  ariaLabel,
  showicon,
}: InfoMessageProps) => {
  return (
    <div
      className={clsx(
        styles.InfoMessage,
        styles[`InfoMessage-${type}`],
        className
      )}
      id={id}
      aria-label={ariaLabel}
    >
      {showicon && renderInfoIcon(type)}
      {children}
    </div>
  );
};
