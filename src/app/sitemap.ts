// src/app/sitemap.ts

import { MetadataRoute } from "next";
import { sanityClient } from "@/lib/sanity.client";
import { groq } from "next-sanity";

// Definir tipo específico para áreas do Sanity
interface AreaSlug {
  slug: string;
  _updatedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://vieiraandrade.com.br";

  // Buscar áreas de atuação do Sanity com tipo específico
  const areas: AreaSlug[] = await sanityClient.fetch(
    groq`*[_type == "areaDeAtuacao" && defined(slug.current)][] {
      "slug": slug.current,
      _updatedAt
    }`
  );

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas-de-atuacao`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const areaPages: MetadataRoute.Sitemap = areas.map((area: AreaSlug) => ({
    url: `${baseUrl}/areas-de-atuacao/${area.slug}`,
    lastModified: new Date(area._updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...areaPages];
}
