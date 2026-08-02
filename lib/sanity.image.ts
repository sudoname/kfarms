import createImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'
import type { Image } from 'sanity'

const imageBuilder = createImageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return imageBuilder
    .image(source)
    .auto('format')
    .fit('max')
    .quality(85)
}
