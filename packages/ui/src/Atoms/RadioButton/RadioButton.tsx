import styles from "./RadioButton.module.scss";
import clsx from "clsx";

interface RadioButtonProps {
  id?: string;
  name?: string;
  value?: string;
  onChange?: () => void;
  className?: string;
  ariaLabel?: string;
  status?: "default" | "hover" | "focus" | "disabled" | "error";
}

export const RadioButton = ({
  id,
  name,
  value,
  onChange,
  className,
  ariaLabel,
  status,
}: RadioButtonProps) => {
  return (
    <div className={clsx(styles.RadioButton, className)}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={status === "disabled"}
        onChange={onChange}
        className={clsx(styles.Input, styles[`Input-${status}`])}
        aria-label={ariaLabel}
        aria-disabled={status === "disabled"}
      />
      <label htmlFor={id} className={styles.Label}>
        {value}
      </label>
    </div>
  );
};
