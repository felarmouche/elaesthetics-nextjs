// types/googlePlaces.ts

export interface GoogleReviewV1 {
    name: string; // Resource name (nicht der Autorenname!)
    relativePublishTimeDescription: string;
    rating: number;
    text?: {
        text: string;
        languageCode: string;
    };
    originalText?: {
        text: string;
        languageCode: string;
    };
    authorAttribution?: {
        displayName: string;
        photoUri?: string;
        uri?: string;
    };
    publishTime: string; // ISO String (z.B. "2023-10-15T10:00:00Z")
}

// Die Antwort der neuen API
export interface GooglePlaceDetailsResponseV1 {
    reviews?: GoogleReviewV1[];
    rating?: number;
    userRatingCount?: number;
    displayName?: {
        text: string;
        languageCode: string;
    };
}