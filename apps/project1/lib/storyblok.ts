import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import Page from "../app/components/Page";

import { CMSButton } from "@repo/ui/Atoms/Button/CMSButton";
import { CMSCheckbox } from "@repo/ui/Atoms/Checkbox/CMSCheckbox";
import { CMSHeadline } from "@repo/ui/Atoms/Headline/CMSHeadline";
import { CMSImage } from "@repo/ui/Atoms/Image/CMSImage";
import { CMSInfoMessage } from "@repo/ui/Atoms/InfoMessage/CMSInfoMessage";
import { CMSLink } from "@repo/ui/Atoms/Link/CMSLink";
import { CMSParagraph } from "@repo/ui/Atoms/Paragraph/CMSParagraph";
import { CMSRadioButton } from "@repo/ui/Atoms/RadioButton/CMSRadioButton";
import { CMSRichtext } from "@repo/ui/Atoms/RichText/CMSRichtext";
import { CMSTooltip } from "@repo/ui/Atoms/Tooltip/CMSTooltip";
import { CMSIntro } from "@repo/ui/Molecules/Intro/CMSIntro";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    button: CMSButton,
    checkbox: CMSCheckbox,
    headline: CMSHeadline,
    image: CMSImage,
    infomessage: CMSInfoMessage,
    link: CMSLink,
    paragraph: CMSParagraph,
    radiobutton: CMSRadioButton,
    tooltip: CMSTooltip,
    intro: CMSIntro,
    richtext: CMSRichtext,
  },
  apiOptions: {
    region: "eu",
  },
});
