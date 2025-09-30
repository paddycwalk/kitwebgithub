import { StoryblokServerComponent } from "@storyblok/react/rsc";

type PageProps = {
  blok: {
    body: Array<{
      _uid: string;
      [key: string]: any;
    }>;
    [key: string]: any;
  };
};

export default function Page({ blok }: PageProps) {
  return (
    <main>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      )) ?? <p>Bitte füge Block Inhalte hinzu</p>}
    </main>
  );
}
