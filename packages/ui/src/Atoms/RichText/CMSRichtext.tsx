import { storyblokEditable } from "@storyblok/react";
import { JSX } from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { CMSButton } from "../Button/CMSButton";
import { CMSHeadline } from "../Headline/CMSHeadline";

type RichTextProps = {
  blok: {
    content: any;
    [key: string]: any;
  };
};

export const CMSRichtext = ({ blok }: RichTextProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      {render(blok.content, {
        markResolvers: {
          // Optional: eigene Marks (bold, italic etc.)
        },
        nodeResolvers: {
          paragraph: ((children: any, node: any) => {
            return (
              <p
                style={
                  node.textAlign ? { textAlign: node.textAlign } : undefined
                }
              >
                {children}
              </p>
            );
          }) as unknown as (children: React.ReactNode) => JSX.Element,
        },
        blokResolvers: {
          // Hier deine eigenen Storyblok-Komponenten:
          paragraph: (props: any) => (
            <p
              style={
                props.textAlign ? { textAlign: props.textAlign } : undefined
              }
            >
              {props.children}
            </p>
          ),
          button: (props) => <CMSButton blok={props as any} />,
          headline: (props) => <CMSHeadline blok={props as any} />,
        },
      })}
    </div>
  );
};
