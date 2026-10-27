import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bhommihub.netlify.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/#properties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/#calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/#legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/#connectivity`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/#why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];
}
