import { Tooltip } from "./Tooltip";

export const CMSTooltip = ({ blok }: any) => {
  const { label, className, id, aria_label, style, beak } = blok ?? {};

  return (
    <Tooltip
      className={className}
      id={id}
      ariaLabel={aria_label}
      style={style}
      beak={beak}
    >
      {label}
    </Tooltip>
  );
};
