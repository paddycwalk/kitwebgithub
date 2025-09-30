import { InfoMessage } from "./InfoMessage";

export const CMSInfoMessage = ({ blok }: any) => {
  const { className, type, aria_label, showicon, label } = blok ?? {};

  return (
    <InfoMessage
      className={className}
      type={type}
      ariaLabel={aria_label}
      showicon={showicon}
    >
      {label}
    </InfoMessage>
  );
};
