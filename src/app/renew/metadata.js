export async function generateMetadata() {
  const title = "Renew IPTV Subscription";
  const description = "Renew your IPTV plan with NexusXtream quickly and securely.";
  const url = "/renew";

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