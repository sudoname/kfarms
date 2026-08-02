'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Play } from 'lucide-react'
import Image from 'next/image'

interface VideoPlayerProps {
  title: string
  url: string
  thumbnail: string
}

export function VideoPlayer({ title, url, thumbnail }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Extract video ID and create embed URL for YouTube/Vimeo
  const getEmbedUrl = (url: string) => {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/)?.[1]
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
    }

    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1]
      return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : url
    }

    // Direct video URL
    return url
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background">
        {/* Thumbnail */}
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
            <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" fill="black" />
          </div>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-semibold line-clamp-2">{title}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-5xl w-full p-0 border-0">
        <div className="aspect-video bg-black">
          {isOpen && (
            <iframe
              src={getEmbedUrl(url)}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
