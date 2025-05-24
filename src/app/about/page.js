import { notFound } from "next/navigation";
import { headers } from "next/headers";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/api/siteservice";
import { MOCK_DATA } from "@/lib/mock/mockdata";

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Helper function to get subdomain from host
function getSubdomain(host) {
  if (host.includes("localhost")) {
    return "d2d";
  }
  const parts = host.split(".");
  if (parts.length > 2) {
    return parts[0];
  }
  return parts[0] === "www" ? "default" : parts[0];
}

export async function generateMetadata({ params, searchParams }) {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const subdomain = getSubdomain(host);
    const { siteMeta } = await fetchPageData(subdomain, "about");

    return {
      title: `${siteMeta.title} - About Us`,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  } catch (error) {
    console.error("siteMeta", error);
    const siteMeta = MOCK_DATA.siteMeta;
    return {
      title: `${siteMeta.title} - About Us`,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  }
}

// Create a client component to apply themes
const PageContent = dynamicImport(() => import("@/components/PageContent"), {
  ssr: true,
});

export default async function AboutPage() {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    const subdomain = getSubdomain(host);
    const { site, siteMeta, config, theme, page, sections } = await fetchPageData(subdomain, "about");

    if (!page) {
      return notFound();
    }

    return (
      <PageContent
        page={page}
        sections={sections}
        theme={theme}
        config={config}
      />
    );
  } catch (error) {
    console.error("Error rendering page:", error);
    return notFound();
  }
} 