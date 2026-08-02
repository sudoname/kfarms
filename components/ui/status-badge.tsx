import { cn } from '@/lib/utils'
import { STATUS_LABELS, type AssetStatus } from '@/lib/farm-data'

const STATUS_STYLES: Record<AssetStatus, string> = {
  operational: 'bg-green-100 text-green-800 border-green-300',
  'under-development': 'bg-gold-100 text-gold-900 border-gold-300',
  planned: 'bg-earth-100 text-earth-800 border-earth-300',
  'long-term-opportunity': 'bg-transparent text-earth-700 border-earth-400',
}

const STATUS_DOT: Record<AssetStatus, string> = {
  operational: 'bg-green-600',
  'under-development': 'bg-gold-600',
  planned: 'bg-earth-500',
  'long-term-opportunity': 'bg-earth-400',
}

interface StatusBadgeProps {
  status: AssetStatus
  className?: string
  showDot?: boolean
}

export function StatusBadge({ status, className, showDot = true }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold',
        STATUS_STYLES[status],
        className,
      )}
    >
      {showDot && <span className={cn('h-1.5 w-1.5 rounded-full', STATUS_DOT[status])} aria-hidden="true" />}
      {STATUS_LABELS[status]}
    </span>
  )
}
