import { Paragraph } from "./Paragraph";

export const CMSParagraph = ({ blok }: any) => {
  const { label, style, bold, aria_label } = blok ?? {};

  return (
    <Paragraph
      label={label}
      style={style}
      bold={bold}
      ariaLabel={aria_label}
      blok={blok}
    />
  );
};
