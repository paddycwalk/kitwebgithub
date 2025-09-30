import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../lib/storyblok";

export default async function HomeWrapper() {
  return <HomeAsync />;
}

async function HomeAsync() {
  const storyblokApi = getStoryblokApi();

  try {
    const { data } = await storyblokApi.get(`cdn/stories/`, {
      version: "draft",
    });
    const story = data.stories?.[0]; // Prüfen, ob Stories existieren

    if (!story) {
      return <div>Keine Story vorhanden</div>;
    }

    return <StoryblokStory story={story} />;
  } catch (err) {
    console.error("Fehler beim Laden der Story:", err);
    return <div>Fehler beim Laden der Story</div>;
  }
}
