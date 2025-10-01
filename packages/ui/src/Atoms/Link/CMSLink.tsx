import { iconMap } from "../../../icons";
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
      iconLeft={iconLeft ? iconMap[iconLeft] : undefined}
      iconRight={iconRight ? iconMap[iconRight] : undefined}
    >
      {children}
    </CustomLink>
  );
};
