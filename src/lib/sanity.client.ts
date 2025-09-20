// src/lib/sanity.client.ts

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { Image as SanityImage } from "sanity"; // <-- Importa o tipo correto

//export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
//export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
//const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export const projectId = "m4ip3y8l";
export const dataset = "production"; // Ou o nome que usou (ex: 'development')
export const apiVersion = "2025-09-16"; // Use a data de hoje (YYYY-MM-DD)

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` se quiser dados sempre frescos
});

const builder = imageUrlBuilder(sanityClient);

// Função auxiliar para gerar os URLs das imagens com a tipagem correta
export function urlFor(source: SanityImage) {
  // <-- Substitui 'any' por 'SanityImage'
  return builder.image(source);
}
