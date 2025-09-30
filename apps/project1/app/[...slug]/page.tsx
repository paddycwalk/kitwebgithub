import { StoryblokStory } from "@storyblok/react/rsc";
import { getStoryblokApi } from "../../lib/storyblok";

export default async function StoryPageWrapper({ params }: any) {
  return <StoryPageAsync params={params} />;
}

async function StoryPageAsync({ params }: any) {
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
    return data.story || null;
  } catch (err) {
    console.error(`Fehler beim Laden der Story "${slug}":`, err);
    return null;
  }
}
