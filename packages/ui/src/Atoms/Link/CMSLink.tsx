import { CustomLink } from "./Link";

export const CMSLink = ({ blok }: any) => {
  const { href, label, target, btn, colored, iconLeft, iconRight, children } =
    blok ?? {};

  return (
    <CustomLink
      href={href}
      label={label}
      target={target}
      btn={btn}
      colored={colored}
      iconLeft={iconLeft}
      iconRight={iconRight}
    >
      {children}
    </CustomLink>
  );
};
