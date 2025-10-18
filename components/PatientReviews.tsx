// Server Component: PatientReviews.tsx  (kein "use client")
import ReviewCarousel from './ReviewCarousel' // Client-Kind
import type { Review } from '@/types/Review'
import { DOMAIN } from '@/lib/constants'

export default function PatientReviews({
  reviews,
  title,
  subtitle,
}: {
  reviews: Review[]
  title: string
  subtitle?: string
}) {
  const reviewCount = reviews.length
  const averageRating =
    reviewCount > 0
      ? Number(
          (
            reviews.reduce((sum, review) => sum + review.rating, 0) / reviewCount
          ).toFixed(1),
        )
      : 0

  const reviewSchema =
    reviewCount > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'MedicalClinic',
          name: 'EL Aesthetics Bremen',
          url: DOMAIN,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: averageRating,
            bestRating: 5,
            worstRating: 1,
            reviewCount,
          },
          review: reviews.map((review) => ({
            '@type': 'Review',
            author: {
              '@type': 'Person',
              name: review.name,
            },
            datePublished: review.date,
            reviewBody: review.text,
            reviewRating: {
              '@type': 'Rating',
              ratingValue: review.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        }
      : null

  return (
    <section aria-labelledby="reviews-title">
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <div className="flex flex-col w-full justify-center max-w-[1300px] mx-auto py-16 md:py-32 px-[5%]">
        <div className="text-left md:text-center">
          <h2
            id="reviews-title"
            className="text-2xl md:text-4xl font-normal mb-6 text-accent-dark uppercase tracking-[2px]"
          >
            {title}
          </h2>
          {subtitle && <p className="leading-relaxed mb-4 md:mb-6 text-lg">{subtitle}</p>}
        </div>

        <div className="w-full">
          <ReviewCarousel reviews={reviews} />
        </div>
      </div>
    </section>
  )
}
