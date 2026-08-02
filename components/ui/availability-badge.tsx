import { cn } from '@/lib/utils'
import { AVAILABILITY_LABELS, type Availability } from '@/lib/farm-data'

const AVAILABILITY_STYLES: Record<Availability, string> = {
  'available-now': 'bg-green-100 text-green-800 border-green-300',
  'upcoming-harvest': 'bg-gold-100 text-gold-900 border-gold-300',
  'planned-production': 'bg-earth-100 text-earth-800 border-earth-300',
}

const AVAILABILITY_DOT: Record<Availability, string> = {
  'available-now': 'bg-green-600',
  'upcoming-harvest': 'bg-gold-600',
  'planned-production': 'bg-earth-500',
}

interface AvailabilityBadgeProps {
  availability: Availability
  className?: string
  showDot?: boolean
}

export function AvailabilityBadge({
  availability,
  className,
  showDot = true,
}: AvailabilityBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
        AVAILABILITY_STYLES[availability],
        className,
      )}
    >
      {showDot && (
        <span
          className={cn('h-1.5 w-1.5 rounded-full', AVAILABILITY_DOT[availability])}
          aria-hidden="true"
        />
      )}
      {AVAILABILITY_LABELS[availability]}
    </span>
  )
}
