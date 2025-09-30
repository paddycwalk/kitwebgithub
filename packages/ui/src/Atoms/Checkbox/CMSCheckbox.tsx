import { Checkbox } from "./Checkbox";

export const CMSCheckbox = ({ blok }: any) => {
  const { label, aria_label, className, name, required, disabled } = blok ?? {};

  return (
    <Checkbox
      className={className}
      name={name}
      required={required}
      disabled={disabled}
      ariaLabel={aria_label}
    >
      {label}
    </Checkbox>
  );
};
