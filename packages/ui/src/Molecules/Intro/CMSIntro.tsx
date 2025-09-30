import { CMSButton } from "../../Atoms/Button/CMSButton";
import { CMSHeadline } from "../../Atoms/Headline/CMSHeadline";
import { CMSParagraph } from "../../Atoms/Paragraph/CMSParagraph";
import { Intro } from "./Intro";

export const CMSIntro = ({ blok }: any) => {
  const { headline, paragraph, button } = blok;

  return (
    <Intro
      headline={<CMSHeadline blok={headline?.[0]} />}
      paragraph={<CMSParagraph blok={paragraph?.[0]} />}
      button={<CMSButton blok={button?.[0]} />}
    />
  );
};
