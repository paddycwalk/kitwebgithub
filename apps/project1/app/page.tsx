// app/page.tsx
import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../lib/storyblok";

export default async function HomePage() {
  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/home`, {
      version: "draft",
    });
    const story = data.story;

    if (!story) return <div>Home nicht gefunden</div>;

    return <StoryblokStory story={story} />;
  } catch (err) {
    console.error("Fehler beim Laden der Home-Story:", err);
    return <div>Fehler beim Laden der Home-Seite</div>;
  }
}
