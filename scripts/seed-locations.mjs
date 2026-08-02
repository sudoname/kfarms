// Finalizes the 5-location dataset to total 850 acres:
//   Ikoyi 60 (order 1) | Otu1 100 (order 2) | Otu2 100 (order 3) | Ilero 90 (order 4) | Ikomu 500 (order 5)
// Existing docs are PATCHED (set only listed fields) so galleries/images are preserved.
//
// Usage: node scripts/seed-locations.mjs

import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { createClient } from '@sanity/client'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = join(__dirname, '..', '.env.local')

if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1)
    if (!(key in process.env)) process.env[key] = val
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || projectId === 'your_project_id_here' || projectId === 'placeholder') {
  console.error('ERROR: NEXT_PUBLIC_SANITY_PROJECT_ID is not set in .env.local')
  process.exit(1)
}
if (!token || token === 'your_read_token_here') {
  console.error('ERROR: SANITY_API_TOKEN (write-enabled) is not set in .env.local')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-01-01', token, useCdn: false })

const targets = [
  { slug: 'ikoyi', label: 'Ikoyi', fields: { name: 'Ikoyi', state: 'Osun', acreage: 60, order: 1 } },
  {
    slug: 'otu1',
    label: 'Otu1',
    fields: {
      name: 'Otu1',
      state: 'Oyo',
      acreage: 100,
      order: 2,
      description: 'Expansion site for diversified crops: corn, palm oil, cassava, peanut, maize & soya beans',
      details: 'Diversified cultivation with livestock integration',
    },
  },
  { slug: 'otu2', label: 'Otu2', fields: { name: 'Otu2', state: 'Oyo', acreage: 100, order: 3 } },
  { slug: 'ilero', label: 'Ilero', fields: { name: 'Ilero', state: 'Oyo', acreage: 90, order: 4 } },
  { slug: 'ikomu', label: 'Ikomu', fields: { name: 'Ikomu', state: 'Oyo', acreage: 500, order: 5 } },
]

async function upsertBySlug({ slug, fields, label }) {
  const existing = await client.fetch('*[_type == "location" && slug.current == $slug][0]{ _id }', { slug })
  if (existing?._id) {
    const res = await client.patch(existing._id).set(fields).commit()
    console.log(`Updated ${label} (${res._id})`)
  } else {
    const res = await client.create({ _type: 'location', slug: { _type: 'slug', current: slug }, ...fields })
    console.log(`Created ${label} (${res._id})`)
  }
}

async function run() {
  console.log(`Connecting to project ${projectId} / dataset ${dataset}...`)
  for (const t of targets) await upsertBySlug(t)

  const locs = await client.fetch(
    '*[_type=="location"]|order(order asc){name,"slug":slug.current,acreage,order}'
  )
  const total = locs.reduce((s, l) => s + (l.acreage || 0), 0)
  console.log('\nFinal state:')
  for (const l of locs) console.log(` - ${l.name} (${l.slug}) | ${l.acreage} acres | order ${l.order}`)
  console.log(`\nLocations: ${locs.length} | Total acreage: ${total}`)
  if (total !== 850) console.warn('WARNING: total acreage is not 850')
}

run().catch((err) => {
  console.error('Mutation failed:', err.message || err)
  process.exit(1)
})
