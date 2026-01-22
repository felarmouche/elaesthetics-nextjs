// lib/googleReviews.ts
import { GooglePlaceDetailsResponseV1 } from '@/types/googlePlaces';
import { Review } from '@/types/Review';

type GoogleReviewsData = {
    reviews: Review[];
    aggregateRating: number;
    reviewCount: number;
    url: string;
};

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn('API Keys fehlen.');
        return null;
    }

    // --- WICHTIG: Die URL für die "New" Places API (v1) ---
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`;

    try {
        const res = await fetch(url, {
            cache: 'force-cache',
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': apiKey,
                // FieldMask: Wir sagen Google EXAKT, welche Felder wir wollen (spart Daten & Kosten)
                'X-Goog-FieldMask': 'reviews,rating,userRatingCount,displayName',
            },
        });

        if (!res.ok) {
            // Fehler loggen, falls Google meckert (z.B. 403 oder 404)
            console.error(`Google Places API Error: ${res.status} ${res.statusText}`);
            const errorBody = await res.text();
            console.error('Error Details:', errorBody);
            throw new Error(`Google Places API Error: ${res.status}`);
        }

        const data = (await res.json()) as GooglePlaceDetailsResponseV1;

        // Mapping der neuen Struktur auf dein internes Format
        const rawReviews = data.reviews || [];

        const mappedReviews: Review[] = rawReviews.map((r, index) => {
            // Datum formatieren (Die neue API liefert ISO Strings "2023-10-05T...", das ist einfacher)
            const dateObj = new Date(r.publishTime);
            const formattedDate = dateObj.toLocaleDateString('de-DE');

            return {
                id: index,
                // Achtung: Der Name steckt jetzt in authorAttribution.displayName
                name: anonymizeName(r.authorAttribution?.displayName || 'Anonym'),
                rating: r.rating,
                // Der Text ist jetzt ein Objekt { text: "..." }
                text: r.text?.text || r.originalText?.text || '',
                date: formattedDate,
            };
        });

        return {
            reviews: mappedReviews,
            aggregateRating: data.rating || 0,
            reviewCount: data.userRatingCount || 0,
            url: `https://search.google.com/local/reviews?placeid=${placeId}`,
        };

    } catch (error) {
        console.error('Failed to fetch google reviews:', error);
        return null;
    }
}
// utils/formatName.ts (oder einfach unten in die Datei)
export function anonymizeName(fullName: string): string {
    if (!fullName) return "Anonymer Patient";

    const parts = fullName.trim().split(" ");

    // Wenn der Name nur aus einem Teil besteht (z.B. "Sandra"), gib ihn zurück
    if (parts.length === 1) {
        return parts[0];
    }

    // Erster Name + Erster Buchstabe des letzten Namens + Punkt
    // Beispiel: "Sandra Maria Gabelschneider" -> "Sandra G."
    const firstName = parts[0];
    const lastName = parts[parts.length - 1]; // Nimmt den allerletzten Teil

    return `${firstName} ${lastName.charAt(0)}.`;
}