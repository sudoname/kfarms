type EnquiryStatus = "NEW" | "IN_REVIEW" | "RESPONDED" | "CLOSED"

const STYLES: Record<EnquiryStatus, string> = {
  NEW: "bg-blue-100 text-blue-800 border-blue-200",
  IN_REVIEW: "bg-amber-100 text-amber-800 border-amber-200",
  RESPONDED: "bg-green-100 text-green-800 border-green-200",
  CLOSED: "bg-gray-100 text-gray-600 border-gray-200",
}

export const STATUS_LABELS: Record<EnquiryStatus, string> = {
  NEW: "New",
  IN_REVIEW: "In review",
  RESPONDED: "Responded",
  CLOSED: "Closed",
}

export function StatusPill({ status }: { status: EnquiryStatus }) {
  return (
    <span
      className={`shrink-0 px-3 py-1 rounded-full border text-xs font-medium ${STYLES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}
