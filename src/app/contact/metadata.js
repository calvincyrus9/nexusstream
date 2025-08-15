export async function generateMetadata() {
  const title = "Contact Us";
  const description = "Get in touch with NexusXtream support for any IPTV-related questions or issues.";
  const url = "/contact";

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