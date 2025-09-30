import { RadioButton } from "./RadioButton";

export const CMSRadioButton = ({ blok }: any) => {
  const { id, name, value, className, aria_label, status } = blok ?? {};

  return (
    <RadioButton
      id={id}
      name={name}
      value={value}
      className={className}
      ariaLabel={aria_label}
      status={status}
    />
  );
};
