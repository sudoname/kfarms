"use client"

import { MapPin, ExternalLink } from "lucide-react"
import { googleMapsUrl, googleMapsEmbedUrl } from "@/lib/farm-data"

interface LocationMapProps {
  coordinates?: {
    lat: number
    lng: number
  }
  name: string
}

export function LocationMap({ coordinates, name }: LocationMapProps) {
  if (!coordinates || !coordinates.lat || !coordinates.lng) {
    return (
      <div className="glass rounded-2xl p-12 text-center">
        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">GPS coordinates will be available soon</p>
      </div>
    )
  }

  const { lat, lng } = coordinates

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-green-700" />
          <h3 className="font-semibold text-foreground">Location map</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          {name} — {lat.toFixed(6)}, {lng.toFixed(6)}
        </p>
      </div>

      <div className="relative w-full h-[400px] md:h-[500px]">
        <iframe
          src={googleMapsEmbedUrl(lat, lng)}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${name}`}
          className="w-full h-full"
        />
      </div>

      <div className="p-4 border-t border-border">
        <a
          href={googleMapsUrl(lat, lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors inline-flex items-center gap-1.5"
        >
          Open in Google Maps
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
