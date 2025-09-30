import { Headline } from "./Headline";

export const CMSHeadline = ({ blok }: any) => {
  const { style, tag, aria_label, id, label, bold, size } = blok ?? {};

  return (
    <Headline
      tag={tag}
      style={style}
      ariaLabel={aria_label}
      id={id}
      bold={bold}
      blok={blok}
      size={size}
    >
      {label}
    </Headline>
  );
};
