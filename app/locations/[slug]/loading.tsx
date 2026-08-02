import { Skeleton } from '@/components/ui/skeleton'

export default function LocationLoading() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero skeleton */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Skeleton className="absolute inset-0 rounded-none" />
      </section>

      {/* Details section skeleton */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          {/* Cards skeleton */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-48 rounded-xl" />
            ))}
          </div>

          {/* Gallery skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="aspect-[4/3] rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
