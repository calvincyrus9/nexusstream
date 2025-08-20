// Server Component (no "use client")

import RenewalClient from "./RenewalClient";

export async function generateMetadata() {
  const title = "Renew IPTV Subscription";
  const description =
    "Renew your IPTV plan with NexusXtream quickly and securely.";
  const url = "/renew";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: "NexusXtream",
      title: `${title} | NexusXtream`,
      description,
      url,
    },
  };
}

export default function RenewPage() {
  return <RenewalClient />;
}
