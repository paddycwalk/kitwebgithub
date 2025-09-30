import clsx from "clsx";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  children?: React.ReactNode;
  value?: string;
  name?: string;
  id?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  onChange?: () => void;
  ariaLabel?: string;
  ariaControls?: string;
  ariaDisabled?: boolean;
}

export const Checkbox = ({
  children,
  value,
  name,
  id,
  required = false,
  className,
  disabled = false,
  onChange,
  ariaLabel,
  ariaControls,
  ariaDisabled,
}: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={id} className={clsx(styles.Label, className)}>
        {children}
      </label>
      <input
        type="checkbox"
        className={clsx(styles.Checkbox, className)}
        value={value}
        name={name}
        id={id}
        required={required}
        disabled={disabled}
        onChange={onChange}
        aria-label={ariaLabel}
        aria-controls={ariaControls}
        aria-disabled={ariaDisabled}
      />
    </div>
  );
};
