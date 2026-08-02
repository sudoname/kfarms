import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/farm-data'

const DEFAULT_MESSAGE =
  'Hello Khan Farms, I am contacting you through kfarms.ng and would like to discuss produce/partnership.'

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Khan Farms on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
