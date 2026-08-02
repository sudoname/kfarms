import { client } from './sanity.client'
import type { QueryParams } from 'next-sanity'

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string
  params?: QueryParams
  revalidate?: number | false
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: { revalidate },
  })
}
