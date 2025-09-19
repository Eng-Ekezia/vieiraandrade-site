// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vieiraandrade.com.br";

  // Buscar áreas de atuação do Sanity
  const areas = await sanityClient.fetch(
    groq`*[_type == "areaDeAtuacao" && defined(slug.current)][] {
      "slug": slug.current,
      _updatedAt
    }`
  );

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas-de-atuacao`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const areaPages = areas.map((area: any) => ({
    url: `${baseUrl}/areas-de-atuacao/${area.slug}`,
    lastModified: new Date(area._updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...areaPages];
}
