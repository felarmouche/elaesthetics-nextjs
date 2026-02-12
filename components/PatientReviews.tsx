import ReviewCarousel from './ReviewCarousel';
import { getGoogleReviews } from '@/lib/googleReviews';
import {ExternalLink} from "lucide-react";

export default async function PatientReviews() {
    const googleReviewsData = await getGoogleReviews();
    const title = "Das sagen meine Patienten";
    const subtitle ="Echte Erfahrungen und ehrliches Feedback zur Behandlung bei El Aesthetic.";

    const reviews = googleReviewsData?.reviews;
    const url = googleReviewsData?.url;
    if (!reviews?.length) return null;

    // Auch im Schema den gekürzten Namen verwenden!
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": "#practice",
        "review": reviews.map((r) => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": r.name
            },
            "reviewRating": {"@type": "Rating", "ratingValue": r.rating},
            "reviewBody": r.text
        }))
    };
    return (
        <section aria-labelledby="reviews-title">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            <div className="flex flex-col w-full justify-center max-w-[1300px] mx-auto py-16 md:py-32 px-[5%]">
                <div className="text-left md:text-center">
                    <h2 id="reviews-title"
                        className="text-2xl md:text-4xl font-normal mb-6 text-accent-dark uppercase tracking-[2px]">
                        {title}
                    </h2>
                    {subtitle && <p className="leading-relaxed mb-4 md:mb-6 text-lg">{subtitle}</p>}
                </div>

                <div className="w-full">
                    {/* Daten an Client-Komponente übergeben */}
                    <ReviewCarousel reviews={reviews}/>

                    <div className="mt-10 flex flex-col items-center gap-4">

                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-gray-800 font-medium group"
                        >
                            {/* Google "G" Logo oder einfaches Icon */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"/>
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"/>
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"/>
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"/>
                            </svg>

                            <span>
                Alle Bewertungen auf Google lesen
              </span>

                            {/* Kleiner Pfeil, der sich beim Hover bewegt */}
                            <ExternalLink
                                className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"/>
                        </a>

                        <div className="text-xs text-gray-700">
                            Powered by <strong>Google</strong>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
