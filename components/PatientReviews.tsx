// Server Component: PatientReviews.tsx  (kein "use client")
import ReviewCarousel from "./ReviewCarousel"; // Client-Kind
import type { Review } from "@/types/Review";

export default function PatientReviews({ reviews, title, subtitle }: {
    reviews: Review[];
    title: string;
    subtitle?: string;
}) {

    return (
        <section aria-labelledby="reviews-title">
            <div className="flex flex-col w-full justify-center max-w-[1300px] mx-auto py-16 md:py-32 px-[5%]">
                <div className="text-left md:text-center">
                    <h2 id="reviews-title" className="text-2xl md:text-4xl font-normal mb-6 text-accent-dark uppercase tracking-[2px]">
                        {title}
                    </h2>
                    {subtitle && <p className="leading-relaxed mb-4 md:mb-6 text-lg">{subtitle}</p>}
                </div>

                <div className=" w-full">
                    <ReviewCarousel reviews={reviews} />
                </div>
                


            </div>

        </section>
    );
}
