// src/lib/sanity.client.ts
import { createClient } from '@sanity/client'

/**
 * ATENÇÃO: Substitua estes valores pelos dados do SEU projeto Sanity.
 * Pode encontrá-los em: https://manage.sanity.io
 */
export const projectId = 'm4ip3y8l'
export const dataset = 'production' // Ou o nome que usou (ex: 'development')
export const apiVersion = '2025-09-16' // Use a data de hoje (YYYY-MM-DD)

/**
 * Configuração do cliente Sanity.
 * Este cliente é usado para buscar dados no lado do servidor (Server Components)
 * e também pode ser usado em Server Actions ou rotas de API.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: process.env.NODE_ENV === 'production', // Use o CDN apenas em produção
  perspective: 'published', // Garante que apenas vemos conteúdo publicado
})