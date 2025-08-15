export async function generateMetadata() {
  const title = "Free IPTV Trial";
  const description = "Sign up for a free trial of NexusXtream and experience our high-quality IPTV service.";
  const url = "/trial";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...SEO.openGraph,
      title: `${title} | NexusXtream`,
      description,
      url,
    },
  };
}