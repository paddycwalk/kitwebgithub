import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../../lib/storyblok";

export default async function StoryPage({ params }: any) {
  const slug = params?.slug?.join("/") || "home";

  const story = await fetchStory(slug);

  if (!story) {
    return <div>Seite nicht gefunden</div>;
  }

  return (
    <div className="page">
      <StoryblokStory story={story} />
    </div>
  );
}

async function fetchStory(slug: string) {
  const storyblokApi = getStoryblokApi();
  try {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version: "draft",
    });
    return data.story;
  } catch {
    return null;
  }
}
