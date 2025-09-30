import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../lib/storyblok";

export default async function Home() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/`, { version: "draft" });

  const story = data.stories[1];

  if (!story) {
    return <div>Keine Story vorhanden</div>;
  }

  return <StoryblokStory story={story} />;
}
