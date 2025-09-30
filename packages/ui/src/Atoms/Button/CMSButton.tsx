import { Button as ButtonTypes } from "../../../../../apps/project1/.storyblok/types/342135/storyblok-components";
import { Button } from "./Button";

export const CMSButton = ({ blok }: { blok: ButtonTypes }) => {
  const { style, type, disabled, ariaLabel, iconLeft, iconRight, label } =
    blok ?? {};

  return (
    <Button
      style={style}
      type={type === "" ? undefined : type}
      disabled={disabled}
      ariaLabel={ariaLabel}
      iconLeft={iconLeft}
      iconRight={iconRight}
      blok={blok}
    >
      {label}
    </Button>
  );
};
