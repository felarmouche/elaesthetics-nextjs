// lib/googleReviews.ts
import { GooglePlaceDetailsResponseV1 } from '@/types/googlePlaces';
import { Review } from '@/types/Review';
import fs from 'fs';
import path from 'path';

const CACHE_PATH = path.join(process.cwd(), 'data', 'reviewsCache.json');

type GoogleReviewsData = {
    reviews: Review[];
    aggregateRating: number;
    reviewCount: number;
    url: string;
};

function getReviewKey(review: Review): string {
    return `${review.name}::${review.text}`;
}

function loadCachedReviews(): Review[] {
    try {
        const raw = fs.readFileSync(CACHE_PATH, 'utf-8');
        return JSON.parse(raw) as Review[];
    } catch {
        return [];
    }
}

function saveCachedReviews(reviews: Review[]): void {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(reviews, null, 2), 'utf-8');
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
        console.warn('API Keys fehlen.');
        return null;
    }

    // --- WICHTIG: Die URL für die "New" Places API (v1) ---
    const url = `https://places.googleapis.com/v1/places/${placeId}?languageCode=de`;

    let aggregateRating = 0;
    let reviewCount = 0;
    let freshFiveStarReviews: Review[] = [];

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
            console.error(`Google Places API Error: ${res.status} ${res.statusText}`);
            const errorBody = await res.text();
            console.error('Error Details:', errorBody);
            throw new Error(`Google Places API Error: ${res.status}`);
        }

        const data = (await res.json()) as GooglePlaceDetailsResponseV1;

        aggregateRating = data.rating || 0;
        reviewCount = data.userRatingCount || 0;

        // Mapping der neuen Struktur auf dein internes Format
        const rawReviews = data.reviews || [];

        const mappedReviews: Review[] = rawReviews.map((r, index) => {
            const dateObj = new Date(r.publishTime);
            const formattedDate = dateObj.toLocaleDateString('de-DE');

            return {
                id: index,
                name: anonymizeName(r.authorAttribution?.displayName || 'Anonym'),
                rating: r.rating,
                text: r.text?.text || r.originalText?.text || '',
                date: formattedDate,
            };
        });

        freshFiveStarReviews = mappedReviews.filter((r) => r.rating === 5);
    } catch (error) {
        console.error('Failed to fetch google reviews:', error);
    }

    // Cache laden, neue 5-Sterne-Reviews hinzufügen, Duplikate vermeiden
    const cached = loadCachedReviews();
    const existingKeys = new Set(cached.map(getReviewKey));

    const newReviews = freshFiveStarReviews.filter(
        (r) => !existingKeys.has(getReviewKey(r))
    );

    if (newReviews.length > 0) {
        const merged = [...cached, ...newReviews];
        saveCachedReviews(merged);
        console.log(`Reviews-Cache: ${newReviews.length} neue 5-Sterne-Reviews hinzugefügt (gesamt: ${merged.length})`);
    }

    const allReviews = loadCachedReviews();

    // IDs neu vergeben
    const reviewsWithIds = allReviews.map((r, i) => ({ ...r, id: i }));

    if (!reviewsWithIds.length) return null;

    return {
        reviews: reviewsWithIds,
        aggregateRating,
        reviewCount,
        url: `https://search.google.com/local/reviews?placeid=${placeId}`,
    };
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